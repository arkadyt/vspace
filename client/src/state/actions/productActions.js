import * as types from './types.js'
import axios from 'axios'

/**
 * See if sortOpts contain at least one defined value.
 * !!undefined   -> false
 * !!'str'       -> true
 *
 * true  || false -> true
 * false || false -> false
 *
 * Finally if options are empty, we get default 'false'.
 */
function isNotNeutral(sortOpts) {
  let neutral = false

  if (sortOpts) {
    for (let i of Object.values(sortOpts)) {
      neutral = neutral || !!i
    }
  }

  return neutral
}

/**
 * Example: &_sort=price,title&order=asc,desc
 *      Or: '' (if all options are neutral)   
 */
function getSortingParams(sortOpts) {
  let queryString = ''

  if (isNotNeutral(sortOpts)) {
    // value of undefined is used to denote no preference for sorting order,
    // but is not recognized by json-server, so these have to be filtered out.
    let sortingPropsArray = Object.keys(sortOpts)
      .filter(key => !!sortOpts[key])

    // multisort is most efficient and usable when properties are sorted in
    // following order; this is a pretty hacky approach though,
    // I should think of a better one.
    const order = [ 'price', 'created_at', 'title' ]
    sortingPropsArray = order.filter(item => sortingPropsArray.includes(item))

    let sortingOrders = sortingPropsArray
      .map((key, idx) => sortOpts[key]).join(',')

    let sortingProps = sortingPropsArray.join(',')
    queryString = `&_sort=${sortingProps}&_order=${sortingOrders}`
  } 

  return queryString
}

export function loadProducts(options, callback) {
  return (dispatch, getState) => {
    // get current or updated values
    // let fn users specify only the options they need
    const { pageIdx, sortOpts } = { ...getState().products, ...options }

    axios.get(`/products?_page=${pageIdx}&_limit=6${getSortingParams(sortOpts)}`)
      .then(res => {
        dispatch({
          type: types.LOAD_PRODUCTS,
          payload: {
            data: res.data,
            headers: res.headers,
            options
          }
        })

        if (callback) callback()
      })
      .catch(err => dispatch({
        type: types.SERVER_ERROR,
        payload: err.response.data
      }))
  }
}
