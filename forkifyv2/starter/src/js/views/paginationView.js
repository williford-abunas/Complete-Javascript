import View from './View.js';
import icons from 'url:../../img/icons.svg';

/**
 * View for the Pagination functionality
 * @extends View
 */
class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');

  /**
   * Generate the markup for the pagination buttons
   * @returns {string} The generated markup
   * @protected
   */
  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return this._generateMarkupButtonNext(curPage);
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      return this._generateMarkupButtonPrev(curPage);
    }
    // Other pages
    if (curPage < numPages) {
      const prevMarkup = this._generateMarkupButtonPrev(curPage);
      const nextMarkup = this._generateMarkupButtonNext(curPage);
      return prevMarkup + nextMarkup;
    }

    // Page 1, and there are NO other pages
    return '';
  }

  /**
   * Add a click event listener to the pagination buttons
   * @param {function} handler - The function to be called when a pagination button is clicked
   * @returns {void}
   */
  addHandlerClick(handler) {
    this._parentEl.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;

      const goToPage = +btn.dataset.goto;
      handler(goToPage);
    });
  }

  /**
   * Generate the markup for the "Previous" pagination button
   * @param {number} curPage - The current page number
   * @returns {string} The generated markup
   * @private
   */
  _generateMarkupButtonPrev(curPage) {
    return `<button data-goto="${
      curPage - 1
    }" class="btn--inline pagination__btn--prev">
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-left"></use>
    </svg>
    <span>Page ${curPage - 1}</span>
  </button>`;
  }

  /**
   * Generate the markup for the "Next" pagination button
   * @param {number} curPage - The current page number
   * @returns {string} The generated markup
   * @private
   */
  _generateMarkupButtonNext(curPage) {
    return `<button data-goto="${
      curPage + 1
    }" class="btn--inline pagination__btn--next">
    <span>Page ${curPage + 1}</span>
    <svg class="search__icon">
      <use href="${icons}#icon-arrow-right"></use>
    </svg>
  </button>`;
  }
}

export default new PaginationView();
