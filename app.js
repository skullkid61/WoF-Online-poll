const hiddenRadio = document.querySelectorAll('input[type=radio]');
const nominees = document.getElementById('nominees');
const card = document.querySelectorAll('.nominee-card');

nominees.addEventListener('click', e => {
	for (i = 0; i < card.length; i++) {
		if (e.target === card[i]) {
			console.log('This click works for nominee ' + (i+1));
			hiddenRadio[i].click();
			e.target.classList.add('border-focus');
		} else if (e.target === nominees) {

		} else {
			card[i].classList.remove('border-focus');
		}
	}
});
