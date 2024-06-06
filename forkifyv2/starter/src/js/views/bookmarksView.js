import View from './View.js';
import previewView from './previewView.js';

/**
 * View for the Bookmarks functionality
 * @extends View
 */
class BookmarksView extends View {
  _parentEl = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';
  _message = '';

  /**
   * Add an event listener to the window's 'load' event to trigger the render method
   * @param {function} handler - The function to be called when the window loads
   * @returns {void}
   */
  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  /**
   * Generate the markup for the bookmarks list
   * @returns {string} The generated markup
   * @protected
   */
  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
