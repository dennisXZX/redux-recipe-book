import {
  ADD_RECIPE,
  FETCH_RECIPE,
  SET_RECIPES
} from '../constants/actionTypes'

export const addRecipe = (name) => ({
  type: ADD_RECIPE,
  name
})

export const fetchRecipes = () => ({
  type: FETCH_RECIPE
})

export const setRecipes = (recipes) => ({
  type: SET_RECIPES,
  recipes
})
