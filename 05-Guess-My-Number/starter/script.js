'use strict';
const body = document.querySelector('body');
const hiddenNum = document.querySelector('.number');
const again = document.querySelector('.again');
const input = document.querySelector('.guess');
const btn = document.querySelector('.check');
const message = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const highScore = document.querySelector('.highscore');

let numberToGuess = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//Events
again.addEventListener('click', resetGame);
btn.addEventListener('click', checkInput);

//Event handler functions
function checkInput() {
  const guess = Number(input.value);

  //When there's no input
  if (!guess) {
    message.textContent = '⛔ Not a number!';

    //When player win
  } else if (guess === numberToGuess) {
    message.textContent = '🎉 Correct Number!';
    hiddenNum.textContent = numberToGuess;
    body.style.backgroundColor = '#60b347';
    hiddenNum.style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      highScore.textContent = highscore;
    }
    //When number is high or low
  } else if (guess !== numberToGuess) {
    if (score > 1) {
      message.textContent =
        guess > numberToGuess ? '⬆️ Too High!' : '⬆️ Too Low!';
      score--;
      scoreEl.textContent = score;
    } else {
      message.textContent = '💥 You lost the game!';
      scoreEl.textContent = 0;
    }
  }
}

function resetGame() {
  score = 20;
  scoreEl.textContent = score;
  numberToGuess = Math.trunc(Math.random() * 20) + 1;
  message.textContent = 'Start guessing...';
  hiddenNum.textContent = '?';
  body.style.backgroundColor = '#222';
  hiddenNum.style.width = '15rem';
  input.value = '';
}
