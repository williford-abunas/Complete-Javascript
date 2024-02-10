'use strict';

const hiddenNum = document.querySelector('.number');
const again = document.querySelector('.again');
const input = document.querySelector('.guess');
const btn = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');

btn.addEventListener('click', checkInput);

function checkInput() {
  const guess = Number(input.value);

  if (!guess) {
    message.textContent = '⛔ Not a number!';
  }
}
