import * as types from '../actions/types'

const initialState = []

export default function (state = initialState, action) {
    switch (action.type) {
        case types.LOAD_PRODUCTS:
            return [...action.payload, ...state]
        default:
            return state
    }
}

