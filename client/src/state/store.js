import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import rootReducer from './reducers/_root'

const persistConfig = {
  key: 'root',
  storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

let store
const middleware = [thunk]
const initialState = {}

if (process.env.NODE_ENV === 'development') {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  store = createStore(persistedReducer, initialState, composeEnhancers(applyMiddleware(...middleware)))
} else {
  store = createStore(persistedReducer, initialState, compose(applyMiddleware(...middleware)))
}

let persistor = persistStore(store)

export { store, persistor }
