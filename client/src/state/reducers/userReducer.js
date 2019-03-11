import * as types from '../actions/types'

const initialState = {
    isAuthenticated: false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case types.LOGIN_USER:
            return {
                isAuthenticated: true
            }
        default:
            return state
    }
}


