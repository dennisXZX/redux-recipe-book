import { createStore, applyMiddleware, compose } from 'redux'
import logMiddleware from './middleware/log'
import apiMiddleware from './middleware/api'
import rootReducer from './reducers/root'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create a store
const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(logMiddleware, apiMiddleware)
))

// place the store into window global object
window.store = store

export default store