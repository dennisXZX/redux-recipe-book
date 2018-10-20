import $ from 'jquery'
import store from './store'
import { addRecipe } from './actions/recipes'

// update UI helper function
function updateUI () {
  // get the recipes from the store
  const { recipes } = store.getState()

  // convert an recipe into an <li> element
  const renderRecipe = (recipe) => `<li>${ recipe.name }</li>`

  // select the <ul> element on the page and render a list inside it
  $('.recipes > ul').html(recipes.map(renderRecipe))
}

// handle add recipe
function handleAdd () {
  // get the input jQuery object
  const $recipeName = $('.recipes > input')

  // dispatch an action
  store.dispatch(addRecipe($recipeName.val()))

  // empty its value
  $recipeName.val('')
}

// export a function that append some HTML to #app
export default function loadUI () {
  $('#app').append(`
    <div class="recipes">
      <h2>Recipes:</h2>
      <ul></ul>
      <input type="text" />
      <button>Add</button>
    </div>`)

  // add updateUI() to the subscribe list
  // so when the state changes, updateUI() will be called
  store.subscribe(updateUI)

  // add event handler
  $(document).on('click', '.recipes > button', handleAdd);

  // initiate the UI
  updateUI()
}
