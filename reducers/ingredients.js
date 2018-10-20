import { ADD_INGREDIENT, SET_INGREDIENT } from '../constants/actionTypes'

const initialState = []

const ingredientsReducer = (ingredients = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      const newIngredient = {
        name: action.name,
        recipe: action.recipe,
        quantity: action.quantity
      }

      return [...ingredients, newIngredient]
    case SET_INGREDIENT:
      return action.ingredients

    default:
      return ingredients
  }
}

export default ingredientsReducer