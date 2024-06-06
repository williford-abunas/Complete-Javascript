/**
 * View for the Search functionality
 */
class SearchView {
  #parentEl = document.querySelector('.search');

  /**
   * Get the search query from the input field and clear the input
   * @returns {string} The search query
   */
  getQuery() {
    const query = this.#parentEl.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  }

  /**
   * Clear the search input field
   * @private
   * @returns {void}
   */
  #clearInput() {
    document.querySelector('.search__field').value = '';
  }

  /**
   * Add an event listener to the search form to handle the search
   * @param {function} handler - The function to be called when the search form is submitted
   * @returns {void}
   */
  addHandlerSearch(handler) {
    this.#parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
