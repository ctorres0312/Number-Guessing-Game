'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number found!⛔️';

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!🎉';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!💥';
    }

    //When guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!💥';
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
    document.querySelector('.message').textContent = 'Start guessing...';

    //reset secret number
    document.querySelector('.number').textContent = '?';

    document.querySelector('.number').style.width = '15rem';

    //reset guess to blank
    document.querySelector('.guess').value = '';
  });
});
