const hiddenRadio = document.querySelectorAll('input[type=radio]');
const card = document.querySelectorAll('.nominee-card');
const voteButton = document.querySelectorAll('.single-vote');
const welcomeDisplay = document.getElementsByClassName('welcome-display')[0];
const goodbyeDisplay = document.getElementsByClassName('goodbye-display')[0];
const goodbyeLogo = document.querySelector('.goodbye-display img');
const startButton = document.getElementsByClassName('start-button')[0];
const form = document.getElementById('form');
const container = document.getElementsByClassName('container')[0];
const nomineeName = document.querySelectorAll('.card-text h2');
const thankYou = document.querySelectorAll('.goodbye-display h1')[0];

document.addEventListener('click', function(e) {
	for (i = 0; i < card.length; i++) {
		if (e.target === card[i]) {
			hiddenRadio[i].checked = true;
      e.target.classList.add('border-focus');
      voteButton[i].classList.remove('hide-vote');
      thankYou.innerHTML = "Thank you for voting for " + nomineeName[i].innerHTML + "!";
		} else {
			card[i].classList.remove('border-focus');
      voteButton[i].classList.add('hide-vote');
		}
	}
});

startButton.addEventListener('click', function(e) {
  welcomeDisplay.classList.add('hide-display');
  container.classList.remove('no-scroll');
});

form.addEventListener('submit', function(e) {
  e.preventDefault();
  goodbyeDisplay.classList.remove('hide-display');
  setTimeout( function() { 
    container.classList.add('no-scroll');
  }, 2000);
  goodbyeLogo.classList.add('expand');
  setTimeout( function() { 
    form.submit();
  }, 10000);
});