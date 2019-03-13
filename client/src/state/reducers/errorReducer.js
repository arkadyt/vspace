import * as types from '../actions/types'

const initialState = {}

export default function (state = initialState, action) {
    switch (action.type) {
        case types.SERVER_ERROR:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

