const hiddenRadio = document.querySelectorAll('input[type=radio]');
const nominees = document.getElementById('nominees');
const card = document.querySelectorAll('.nominee-card');
const submit = document.getElementById('vote-now');
const nomineeName = document.querySelectorAll('.card-text h2');
const voteButton = document.querySelectorAll('.single-vote');
const welcomeDisplay = document.getElementsByClassName('welcome-display')[0];
const startButton = document.getElementsByClassName('start-button')[0];

document.addEventListener('click', (e) => {
  let count = 0;
	for (i = 0; i < card.length; i++) {
		if (e.target === card[i]) {
      // console.log('This click works for nominee ' + (i+1));
			hiddenRadio[i].checked = true;
      e.target.classList.add('border-focus');
      voteButton[i].classList.remove('hide-vote');
		} else {
			card[i].classList.remove('border-focus');
      hiddenRadio[i].checked = false;
      voteButton[i].classList.add('hide-vote');
      // console.log('else being activated for item ' + (i + 1));
      // count ++;
      // if (count > card.length - 1) {
      //   voteButton[i].classList.add('hide-vote');
      // }
		}
	}
});

startButton.addEventListener('click', (e) => {
  welcomeDisplay.classList.add('hide-display');
});
