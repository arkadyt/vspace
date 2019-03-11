import * as types from '../actions/types'
import { combineReducers } from 'redux'
import userReducer from './userReducer'
import errorReducer from './errorReducer'
import productReducer from './productReducer'

const appReducer = combineReducers({
    users: userReducer,
    errors: errorReducer,
    products: productReducer
})

const rootReducer = (state, action) => {
    if (action.type === types.LOGOUT_USER) {
        state = undefined
    }
    return appReducer(state, action)
}

export default rootReducer
