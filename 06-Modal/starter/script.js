'use strict';

const modalEl = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const showModalBtns = document.querySelectorAll('.show-modal');

for (let i = 0; i < showModalBtns.length; i++) {
  showModalBtns[i].addEventListener('click', open);
}

closeModal.addEventListener('click', close);
overlay.addEventListener('click', close);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
    close();
  }
});

function close() {
  modalEl.classList.add('hidden');
  overlay.classList.add('hidden');
}

function open() {
  modalEl.classList.remove('hidden');
  overlay.classList.remove('hidden');
}
