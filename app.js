const hiddenRadio = document.querySelectorAll('input[type=radio]');
const card = document.querySelectorAll('.nominee-card');
const voteButton = document.querySelectorAll('.single-vote');
const welcomeDisplay = document.getElementsByClassName('welcome-display')[0];
const goodbyeDisplay = document.getElementsByClassName('goodbye-display')[0];
const startButton = document.getElementsByClassName('start-button')[0];
const form = document.getElementById('form');

document.addEventListener('click', (e) => {
	for (i = 0; i < card.length; i++) {
		if (e.target === card[i]) {
			hiddenRadio[i].checked = true;
      e.target.classList.add('border-focus');
      voteButton[i].classList.remove('hide-vote');
		} else {
			card[i].classList.remove('border-focus');
      voteButton[i].classList.add('hide-vote');
		}
	}
});

startButton.addEventListener('click', (e) => {
  welcomeDisplay.classList.add('hide-display');
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  goodbyeDisplay.classList.remove('hide-display');
  setTimeout( () => { 
    form.submit()
  }, 10000);
});