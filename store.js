import { createStore } from 'redux'
import rootReducer from './reducers/root'

// create a store
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

// place the store into window global object
window.store = store

export default store