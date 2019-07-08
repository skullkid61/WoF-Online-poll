const hiddenRadio = document.querySelectorAll('input[type=radio]');
const card = document.querySelectorAll('.nominee-card');
const voteButton = document.querySelectorAll('.single-vote');
const welcomeDisplay = document.getElementsByClassName('welcome-display')[0];
const startButton = document.getElementsByClassName('start-button')[0];

document.addEventListener('click', (e) => {
	for (i = 0; i < card.length; i++) {
		if (e.target === card[i]) {
			hiddenRadio[i].checked = true;
      e.target.classList.add('border-focus');
      voteButton[i].classList.remove('hide-vote');
		} else {
			card[i].classList.remove('border-focus');
      hiddenRadio[i].checked = false;
      voteButton[i].classList.add('hide-vote');
		}
	}
});

startButton.addEventListener('click', (e) => {
  welcomeDisplay.classList.add('hide-display');
});