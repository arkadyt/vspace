import * as types from './types.js'
import axios from 'axios'

export function loadProducts(callback) {
  return dispatch => {
    axios.get('/products')
      .then(res => {
          dispatch({
              type: types.LOAD_PRODUCTS,
              payload: res.data
          })
          if (callback) callback()
      })
      .catch(err => dispatch({
          type: types.SERVER_ERROR,
          payload: err.response.data
      }))
  }
}
