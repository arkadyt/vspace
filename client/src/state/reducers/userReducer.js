import * as types from '../actions/types'

const initialState = {
  isAuthenticated: false,
  currentUserName: 'Stranger'
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_USER:
      return {
        isAuthenticated: true,
        currentUserName: action.payload
      }
    default:
      return state
  }
}


