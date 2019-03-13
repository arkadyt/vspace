import * as types from '../actions/types'

const initialState = {
  data: [],
  // redux does not merge empty objects when it updates state
  // i'll figure out what to do later; here's quick hack for now
  sortOpts: {
    val: 'temphack'
  }
}

export default function (state = initialState, { type, payload }) {
    switch (type) {
        case types.LOAD_PRODUCTS:
          return {
            data: [...payload.data, ...state.data],
            sortOpts: {
              val: 'temphack',
              ...payload.sortOpts
            }
          }
        default:
            return state
    }
}

