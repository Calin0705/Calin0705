'use strict';

let currentScore1 = 0;
let currentScore2 = 0;

let score1 = 0;
let score2 = 0;

let dice = document.querySelector('.dice');
const rollDiceBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newGameBtn = document.querySelector('.btn--new');

const player1 = document.querySelector('.player--0');
const currentScorePlayer1 = document.getElementById('current--0');
const scorePlayer1 = document.getElementById('score--0');
scorePlayer1.textContent = '0';

const player2 = document.querySelector('.player--1');
const currentScorePlayer2 = document.getElementById('current--1');
const scorePlayer2 = document.getElementById('score--1');
scorePlayer2.textContent = '0';

rollDiceBtn.addEventListener('click', function () {
  if (score1 < 100 && score2 < 100) {
    let diceNumber = Math.trunc(Math.random() * 6 + 1);
    dice.src = `http://127.0.0.1:8080/dice-${diceNumber}.png`;

    if (player1.classList.contains('player--active')) {
      if (diceNumber !== 1) {
        currentScore1 += diceNumber;
        currentScorePlayer1.textContent = currentScore1;
      } else {
        currentScore1 = 0;
        currentScorePlayer1.textContent = currentScore1;
        player2.classList.add('player--active');
        player1.classList.remove('player--active');
      }
    } else if (player2.classList.contains('player--active')) {
      if (diceNumber !== 1) {
        currentScore2 += diceNumber;
        currentScorePlayer2.textContent = currentScore2;
      } else {
        currentScore2 = 0;
        currentScorePlayer2.textContent = currentScore2;
        player1.classList.add('player--active');
        player2.classList.remove('player--active');
      }
    }
  }
});

holdBtn.addEventListener('click', () => {
  if (player1.classList.contains('player--active')) {
    player2.classList.add('player--active');
    player1.classList.remove('player--active');
    score1 += currentScore1;
    scorePlayer1.textContent = score1;
    currentScore1 = 0;
    currentScorePlayer1.textContent = currentScore1;
    if (score1 >= 100) {
      player1.classList.add('player--winner');
    }
  } else if (player2.classList.contains('player--active')) {
    player1.classList.add('player--active');
    player2.classList.remove('player--active');
    score2 += currentScore2;
    scorePlayer2.textContent = score2;
    currentScore2 = 0;
    currentScorePlayer2.textContent = currentScore2;
    if (score2 >= 100) {
      player2.classList.add('player--winner');
    }
  }
});

newGameBtn.addEventListener('click', function () {
  player1.classList.add('player--active');
  player2.classList.remove('player--active');
  player1.classList.remove('player--winner');
  player2.classList.remove('player--winner');
  currentScore1 = 0;
  currentScore2 = 0;
  score1 = 0;
  score2 = 0;
  scorePlayer1.textContent = '0';
  scorePlayer2.textContent = '0';
  currentScorePlayer1.textContent = currentScore1;
  currentScorePlayer2.textContent = currentScore2;
});
