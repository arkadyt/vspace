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
 * Example: ?_sort=price,title&order=asc,desc
 *      Or: '' (if options are neutral)   
 */
function getQueryString(sortOpts) {
  let queryString = ''

  if (isNotNeutral(sortOpts)) {
    let sortingPropsArray = Object.keys(sortOpts)
    let sortingOrders = ''

    sortingPropsArray.map((key, idx) => { 
      sortingOrders += 
        idx === 0
          ? sortOpts[key]
          : ',' + sortOpts[key]
    })

    let sortingProps = sortingPropsArray.join(',')
    queryString = `?_sort=${sortingProps}&_order=${sortingOrders}`
  } 

  return queryString
}

export function loadProducts(sortOpts, callback) {
  return dispatch => {
    axios.get('/products' + getQueryString(sortOpts))
      .then(res => {
        dispatch({
          type: types.LOAD_PRODUCTS,
          payload: {
            data: res.data,
            sortOpts
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
