import * as types from '../actions/types'

const initialState = {
  data: [],
  sortOpts: {}
}

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case types.LOAD_PRODUCTS:
          return {
            ...state,
            data: [...payload.data, ...state.data],
            sortOpts: {
              ...state.sortOpts,
              ...payload.sortOpts
            }
          }
        default:
            return state
    }
}

