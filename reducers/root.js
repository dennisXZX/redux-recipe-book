import { combineReducers } from 'redux'
import recipesReducer from './recipes'
import ingredientsReducer from './ingredients'

const rootReducer = combineReducers({
  recipes: recipesReducer,
  ingredients: ingredientsReducer
})

// implement the combineReducers by ourselves
// const rootReducer = (state, action) => {
//   return Object.assign({}, state, {
//     recipes: recipesReducer(state.recipes, action),
//     ingredients: ingredientsReducer(state.ingredients, action)
//   })
// }

export default rootReducer