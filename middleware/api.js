import axios from 'axios'
import { FETCH_RECIPE } from '../constants/actionTypes'
import { setRecipes } from '../actions/recipes'
import { setIngredient } from '../actions/ingredients'

const URL = 'https://s3.amazonaws.com/500tech-shared/db.json'

function fetchData (url, callback) {
  axios.get(URL)
    .then(callback)
    .catch(err => console.log(`Error fetching recipes: ${err}`))
}

const apiMiddleware = ({ dispatch }) => next => action => {
  function processData ({ data }) {
    dispatch(setRecipes(data.recipes))
    dispatch(setIngredient(data.ingredients))
  }

  if (action.type === FETCH_RECIPE) {
    fetchData(URL, processData)
  }

  next(action)
}

export default apiMiddleware