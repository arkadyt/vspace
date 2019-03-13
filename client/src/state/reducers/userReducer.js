import * as types from '../actions/types'

const initialState = {
  isAuthenticated: false,
  currentUserName: 'Stranger',
  loginHistory: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_USER:
      return {
        ...state,
        isAuthenticated: true,
        currentUserName: action.payload === ''
          ? state.currentUserName
          : action.payload
      }
    case types.LOAD_LOGIN_HIST:
      if (!state.loginHistory) {
        state.loginHistory = []
      }

      return {
        ...state,
        loginHistory: [
          ...action.payload,
          ...state.loginHistory
        ]
      }
    default:
      return state
  }
}


