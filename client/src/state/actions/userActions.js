import * as types from './types'
import axios from 'axios'

export function loginUser(username, callback) {
  return dispatch => {
    axios.post('/users', { username })
      .then(res => {
        dispatch({
          type: types.LOGIN_USER,
          payload: res.data.username
        })

        if (callback) callback()
      })
      .catch(err => {
        dispatch({ 
          type: types.SERVER_ERROR, 
          payload: err.response.data
        })
      })    
  }
}

export function logoutUser(callback) {
  return dispatch => {
    dispatch({
      type: types.LOGOUT_USER
    })

    if (callback) callback()
  }
}

export function fetchLoginHistory(callback) {
  return dispatch => {
    axios.get('/users')
      .then(res => {
        dispatch({
          type: types.LOAD_LOGIN_HIST,
          payload: res.data
        })

        if (callback) callback()
      })
      .catch(err => {
        dispatch({ 
          type: types.SERVER_ERROR, 
          payload: err.response.data
        })
      })    
  }
}
