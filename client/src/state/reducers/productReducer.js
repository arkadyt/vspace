import * as types from '../actions/types'

const initialState = {
  data: [],
  sortOpts: {},
  totalCount: 0,
  pageIdx: 1
}

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case types.LOAD_PRODUCTS:
          return {
            ...state,
            data: payload.data,
            totalCount: parseInt(payload.headers['x-total-count']),
            ...payload.options
          }
        default:
            return state
    }
}

