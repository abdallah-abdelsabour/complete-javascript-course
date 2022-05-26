'use strict';

// btn btn--new
// btn btn--roll
// btn btn--hold

let rollDeice = document.querySelector('.btn--roll');

let hold = document.querySelector('.btn--hold');

let resetGame = document.querySelector('.btn--new');

let diceImage = document.querySelector('img');

let diceNumber;

let activePlayer = 0;

let player_1_current = 0;

let player_2_Current = 0;

let player_1_total = 0;
let player_2_total = 0;
let total = 0;

const updateCurrent = function (current) {
  total = total + current;
  document.querySelector('#current--0').textContent = total;
};

// change active player

const changeActivePlayer = function () {
  activePlayer = activePlayer ? 0 : 1;
};

// update player

const changeDiceNumber = function () {
  diceNumber = Math.trunc(Math.random() * 6 + 1);

  diceImage.src = `dice-${diceNumber}.png`;
  updateCurrent(diceNumber);
  console.log(diceNumber);
  changeActivePlayer();
  console.log(activePlayer);
};

// roll dice
