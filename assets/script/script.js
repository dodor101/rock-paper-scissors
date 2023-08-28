// import html element

const userChoiceEl = document.querySelector('#choices');

// addEventListeners to options section

userChoiceEl.addEventListener('click', (e) => {
  let myChoice = e.target.dataset.choice;

  if (myChoice === 'rock') {
    alert('You Picked Rock');
  } else if (myChoice === 'paper') {
    alert('You Picked Paper');
  } else {
    alert('You Picked Scissors');
  }
});
