'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

const bgColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    displayMessage('No number found!⛔️');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!🎉');
    document.querySelector('.number').textContent = secretNumber;

    bgColor('#60b347');

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is too high or low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!📈' : 'Too Low!📉');
      score--;
      document.querySelector('.score').textContent = score;

      if (score >= 10 && score <= 14) {
        bgColor('#D7AB24');
      } else if (score < 10) {
        bgColor('#FF7907');
      }
    } else {
      displayMessage('You lost the game!💥');
      bgColor('#E01F26');
      document.querySelector('.score').textContent = 0;
    }
  }

  document.querySelector('.again').addEventListener('click', function () {
    // reset score
    score = 20;

    //reset random number
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    //reset score
    document.querySelector('.score').textContent = score;

    //reset background
    document.querySelector('body').style.backgroundColor = '#222';

    //reset message
    displayMessage('Start guessing...');

    //reset secret number
    document.querySelector('.number').textContent = '?';

    document.querySelector('.number').style.width = '15rem';

    //reset guess to blank
    document.querySelector('.guess').value = '';
  });
});
