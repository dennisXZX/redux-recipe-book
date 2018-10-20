import { ADD_INGREDIENT, SET_INGREDIENT } from '../constants/actionTypes'

export const addIngredient = (recipe, name, quantity) => ({
  type: ADD_INGREDIENT,
  recipe,
  name,
  quantity
})

export const setIngredient = (ingredients) => ({
  type: SET_INGREDIENT,
  ingredients
})