import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import bookmarksView from './views/bookmarksView.js';
import paginationView from './views/paginationView.js';
import addRecipeView from './views/addRecipeView.js';
// polyfill anything else that is not supported by the browser
import 'core-js/stable';
// polyfill async - await
import 'regenerator-runtime/runtime';
import { MODAL_CLOSE_SEC } from './config.js';

/**
 * Handle hot module replacement (HMR) for development
 */
if (module.hot) {
  module.hot.accept();
}

/**
 * Control the rendering of the recipe view
 * @async
 * @returns {void}
 */
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    recipeView.renderSpinner();
    // 0) Update results view to mark selected search result
    resultsView.update(model.getSearchResultsPage());
    bookmarksView.update(model.state.bookmarks);

    // 1) Loading recipe
    await model.loadRecipe(id);

    // 2) Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (error) {
    recipeView.renderError();
  }
};

/**
 * Control the rendering of the search results view
 * @async
 * @returns {void}
 */
const controlSearchResults = async () => {
  try {
    // get query
    const query = searchView.getQuery();
    if (!query) return;

    // render loading spinner
    resultsView.renderSpinner();

    // load search results
    await model.loadSearchResults(query);
    // render results
    resultsView.render(model.getSearchResultsPage());
    // render initial pagination buttons
    paginationView.render(model.state.search);
  } catch (error) {
    console.log(error);
  }
};

/**
 * Control the rendering of the pagination view
 * @param {number} goToPage - The page number to navigate to
 * @returns {void}
 */
const controlPagination = goToPage => {
  // render new results
  resultsView.render(model.getSearchResultsPage(goToPage));
  // render new pagination buttons
  paginationView.render(model.state.search);
};

/**
 * Control the updating of the recipe servings
 * @param {number} newServings - The new number of servings
 * @returns {void}
 */
const controlServings = newServings => {
  // update the recipe servings (in state)
  model.updateServings(newServings);
  // update the recipe view
  // recipeView.render(model.state.recipe);
  recipeView.update(model.state.recipe);
};

/**
 * Control the adding or removing of a bookmark
 * @returns {void}
 */
const controlAddBookmark = () => {
  // Add or remove bookmark
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  // Update changed element
  recipeView.update(model.state.recipe);

  // Render bookmarks
  bookmarksView.render(model.state.bookmarks);
};

/**
 * Control the rendering of the bookmarks view
 * @returns {void}
 */
const controlBookmarks = () => {
  bookmarksView.render(model.state.bookmarks);
};

/**
 * Control the adding of a new recipe
 * @async
 * @param {Object} newRecipe - The new recipe data
 * @returns {void}
 */
const controlAddRecipe = async newRecipe => {
  try {
    // Upload the new recipe data
    await model.uploadRecipe(newRecipe);
    console.log(model.state.recipe);

    // Render recipe
    recipeView.render(model.state.recipe);

    // update bookmarks view
    bookmarksView.render(model.state.bookmarks);

    // Success message
    addRecipeView.renderMessage();

    // Change ID in url
    window.history.pushState(null, '', `#${model.state.recipe.id}`);

    //Close form window
    setTimeout(() => {
      addRecipeView.toggleWindow();
    }, MODAL_CLOSE_SEC * 1000);
  } catch (err) {
    console.error(`${err} 💩!`);
    addRecipeView.renderError(err.message);
  }
};

/**
 * Initialize the application
 * @returns {void}
 */
const init = () => {
  bookmarksView.addHandlerRender(controlBookmarks);
  recipeView.addHandlerRender(controlRecipes);
  recipeView.addHandlerUpdateServings(controlServings);
  recipeView.addHandlerAddBookmark(controlAddBookmark);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
  addRecipeView.addHandlerUpload(controlAddRecipe);
};

init();
