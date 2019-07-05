const hiddenRadio = document.querySelectorAll('input[type=radio]');
const nominees = document.getElementById('nominees');
const card = document.querySelectorAll('.nominee-card');
const submit = document.getElementById('vote-now');
const nomineeName = document.querySelectorAll('.card-text h2');

document.addEventListener('click', (e) => {
  let count = 0;
	for (i = 0; i < card.length; i++) {
		if (e.target === card[i]) {
      console.log('This click works for nominee ' + (i+1));
			hiddenRadio[i].checked = true;
      e.target.classList.add('border-focus');
      submit.setAttribute('value', 'Vote for ' + nomineeName[i].innerText);
		} else {
			card[i].classList.remove('border-focus');
      hiddenRadio[i].checked = false;
      console.log('else being activated for item ' + (i + 1));
      count ++;
      if (count > card.length - 1) {
        submit.classList.add('hidden-button');
      } else {
        submit.classList.remove('hidden-button');
      }
		}
	}
});