// import html element
const wins = document.querySelector('#wins');

const loses = document.querySelector('#loses');
const ties = document.querySelector('#ties');

const userChoiceEl = document.querySelector('#choices');

const playGameBtn = document.querySelector('#playGame');
// create score object

let score = {
  wins: 0,
  loses: 0,
  ties: 0,
};

let result = JSON.parse(localStorage.getItem('score'));

wins.textContent = result?.wins;
loses.textContent = result?.loses;
ties.textContent = result?.ties;

function getScore() {
  localStorage.setItem('score', JSON.stringify(score));
}

// create players options
let options = ['R', 'P', 'P'];

// create computer's choice
function getComputedChoice() {
  let computerChoice = '';

  let randomIndex = Math.floor(Math.random() * options.length);

  switch (randomIndex) {
    case 0:
      computerChoice = 'rock';
      break;
    case 1:
      computerChoice = 'paper';
      break;
    case 2:
      computerChoice = 'scissors';
      break;
  }
  return computerChoice;
}

// addEventListeners to options section
let playGame = function () {
  userChoiceEl.addEventListener('click', (e) => {
    let myChoice = e.target.dataset.choice;

    let computerChoice = getComputedChoice();
    let message = '';

    if (myChoice === 'rock' && computerChoice === 'scissors') {
      score.wins++;
      wins.textContent = score.wins;
      getScore();
      message = `You picked ${myChoice} and Computer Picked ${computerChoice}: You WIN!!!`;
    } else if (myChoice === 'scissors' && computerChoice === 'rock') {
      score.loses++;
      loses.textContent = score.loses;
      getScore();
      message = `You picked ${myChoice} and Computer Picked ${computerChoice}: You LOSE!`;
    } else if (myChoice === 'scissors' && computerChoice === 'paper') {
      score.wins++;
      wins.textContent = score.wins;
      getScore();
      message = `You picked ${myChoice} and Computer Picked ${computerChoice}: You WIN!!!`;
    } else if (myChoice === 'paper' && computerChoice === 'scissors') {
      score.loses++;
      loses.textContent = score.loses;
      getScore();
      message = `You picked ${myChoice} and Computer Picked ${computerChoice}: You LOSE!`;
    } else if (myChoice === 'paper' && computerChoice === 'rock') {
      score.wins++;
      wins.textContent = score.wins;
      getScore();
      message = `You picked ${myChoice} and Computer Picked ${computerChoice}: You Win!!!`;
    } else if (myChoice === 'rock' && computerChoice === 'paper') {
      score.loses++;
      loses.textContent = score.loses;
      getScore();
      message = `You picked ${myChoice} and Computer Picked ${computerChoice}: You Lose!`;
    } else if (myChoice === computerChoice) {
      score.ties++;
      ties.textContent = score.ties;
      getScore();
      message = `You picked ${myChoice} and Computer Picked ${computerChoice}: It's a Tie!!`;
    } else {
      return message;
    }

    // display score on the client
    alert(message);
  });
};

playGameBtn.addEventListener('click', () => {
  getScore();
  playGame();
});
