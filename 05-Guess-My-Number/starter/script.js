'use strict';

const hiddenNum = document.querySelector('.number');
const again = document.querySelector('.again');
const input = document.querySelector('.guess');
const btn = document.querySelector('.check');
const message = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highScore = document.querySelector('.highscore');

const numberToGuess = Math.trunc(Math.random() * 20) + 1;

let score = 20;

hiddenNum.textContent = numberToGuess;

btn.addEventListener('click', checkInput);

function checkInput() {
  const guess = Number(input.value);

  if (!guess) {
    message.textContent = '⛔ Not a number!';
  } else if (guess === numberToGuess) {
    message.textContent = '🎉 Correct Number!';
  } else if (guess > numberToGuess) {
    if (score > 1) {
      message.textContent = '⬆️ Too High!';
      score--;
      scoreEl.textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
      scoreEl.textContent = 0;
    }
  } else if (guess < numberToGuess) {
    if (score > 1) {
      message.textContent = '⬆️ Too Low!';
      score--;
      scoreEl.textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
      scoreEl.textContent = 0;
    }
  }
}
