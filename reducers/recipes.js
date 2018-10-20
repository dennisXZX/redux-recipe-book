import { ADD_RECIPE, SET_RECIPES } from '../constants/actionTypes'

const initialState = []

const recipesReducer = (recipes = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return [...recipes, { name: action.name }]
    case SET_RECIPES:
      return action.recipes;

    default:
      return recipes
  }
}
export default recipesReducer