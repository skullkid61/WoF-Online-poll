const hiddenRadio = document.querySelectorAll('input[type=radio]');
const nominees = document.getElementById('nominees');
const card = document.querySelectorAll('.nominee-card');
const submit = document.getElementById('vote-now');
const nomineeName = document.querySelectorAll('.card-text h2');

nominees.addEventListener('click', e => {
	for (i = 0; i < card.length; i++) {
		if (e.target === card[i]) {
			console.log('This click works for nominee ' + (i+1));
			hiddenRadio[i].checked = true;
      e.target.classList.add('border-focus');
      submit.style.display = 'block';
      submit.setAttribute('value', 'Vote for ' + nomineeName[i].innerText);
		} else {
			card[i].classList.remove('border-focus');
      hiddenRadio[i].checked = false;
		}
	}
});
