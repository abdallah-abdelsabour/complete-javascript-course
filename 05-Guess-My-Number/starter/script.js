'use strict';

let targetNumber = Math.trunc(Math.random() * 5 + 1);

let scoreNumber = 20;

let highscore = 0;

console.log('the secret number is ', targetNumber);

// message function
const displayMessage = function (message) {
  document.querySelector('.message').innerHTML = message;
};

// add event listener

document.querySelector('.check').addEventListener('click', () => {
  console.log(document.querySelector('.guess').value);

  let guessInput = document.querySelector('.guess').value;

  if (!guessInput) {
    document.querySelector('.message').innerHTML = 'no number insert';
  }

  // wrong choise
  else if (guessInput != targetNumber) {
    if (scoreNumber >= 1) {
      scoreNumber -= 1;
      document.querySelector('.score').innerHTML = scoreNumber;
      let message = guessInput > targetNumber ? 'too high ' : 'too low';

      displayMessage(message);
      // document.querySelector('.message').innerHTML = 'too high';
    } else {
      document.querySelector('.message').innerHTML = 'you lose ';
    }
    // } else if (guessInput < targetNumber) {

    //   if (scoreNumber >= 1) {
    //     document.querySelector('.score').innerHTML = scoreNumber;

    //     scoreNumber -= 1;

    //     document.querySelector('.message').innerHTML = 'too low';
    //   } else {
    //     document.querySelector('.message').innerHTML = 'you did lose ';
    //   }

    //    correct choices
  } else if (guessInput == targetNumber) {
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').textContent = targetNumber;
    document.querySelector('.message').innerHTML =
      'congratulation   you win it ';

    if (scoreNumber > highscore) {
      highscore = scoreNumber;

      document.querySelector('.highscore').innerHTML = highscore;
    }

    // document.querySelector('.highscore').textContent = scoreNumber;
  }
});

//   reset functions

document.querySelector('.again').addEventListener('click', () => {
  targetNumber = Math.trunc(Math.random() * 5 + 1);
  console.log(targetNumber);
  document.querySelector('.score').innerHTML = 20;
  document.querySelector('.message').innerHTML = 'start guessing . . ';
  document.querySelector('.guess').value = null;

  document.querySelector('body').style.backgroundColor = '#222222';
});

document.querySelector('.highscore');
