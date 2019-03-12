import * as types from './types'
import axios from 'axios'

export function loginUser(name, callback) {
  return dispatch => {
    dispatch({
      type: types.LOGIN_USER,
      payload: name
    })

    if (callback) callback()
  }
}
