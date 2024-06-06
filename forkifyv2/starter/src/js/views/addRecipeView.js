import View from './View.js';
import icons from 'url:../../img/icons.svg';

/**
 * View for the Add Recipe functionality
 * @extends View
 */
class AddRecipeView extends View {
  _parentEl = document.querySelector('.upload');
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');
  _message = 'Recipe was successfully uploaded';

  /**
   * Create an instance of AddRecipeView and set up event handlers
   */
  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  /**
   * Toggle the visibility of the add recipe window and overlay
   * @returns {void}
   */
  toggleWindow() {
    this._window.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');
  }

  /**
   * Add event listener to the "Add Recipe" button to show the add recipe window
   * @private
   * @returns {void}
   */
  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toggleWindow.bind(this));
  }

  /**
   * Add event listeners to the close button and overlay to hide the add recipe window
   * @private
   * @returns {void}
   */
  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toggleWindow.bind(this));
    this._overlay.addEventListener('click', this.toggleWindow.bind(this));
  }

  /**
   * Add an event listener to the add recipe form to handle the upload
   * @param {function} handler - The handler function to be called when the form is submitted
   * @returns {void}
   */
  addHandlerUpload(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }
}

export default new AddRecipeView();
