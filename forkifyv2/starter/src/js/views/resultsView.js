import View from './View.js';
import previewView from './previewView.js';

/**
 * View for the Search Results functionality
 * @extends View
 */
class ResultsView extends View {
  _parentEl = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query! Please try again ;)';
  _message = '';

  /**
   * Generate the markup for the search results
   * @override
   * @returns {string} The generated markup
   * @protected
   */
  _generateMarkup() {
    return this._data.map(result => previewView.render(result, false)).join('');
  }
}

export default new ResultsView();
