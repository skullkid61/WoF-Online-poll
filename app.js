(function () {
  const hiddenRadio    = document.querySelectorAll('input[type=radio]');
  const card           = document.querySelectorAll('.nominee-card');
  const voteButton     = document.querySelectorAll('.single-vote');
  const welcomeDisplay = document.querySelector('.welcome-display');
  const goodbyeDisplay = document.querySelector('.goodbye-display');
  const goodbyeLogo    = document.querySelector('.goodbye-display img');
  const startButton    = document.querySelector('.start-button');
  const form           = document.querySelector('#form');
  const container      = document.querySelector('.container');
  const nomineeName    = document.querySelectorAll('.card-text h2');
  const thankYou       = document.querySelector('.goodbye-display h1');

  document.addEventListener('click', function (e) {
    for (i = 0; i < card.length; i++) {
      if (e.target === card[i]) {
        hiddenRadio[i].checked = true;
        e.target.classList.add('border-focus');
        voteButton[i].classList.remove('hide-vote');
        thankYou.innerHTML = "Thank you for voting for " + nomineeName[i].innerHTML + "!";
      }
      else {
        card[i].classList.remove('border-focus');
        voteButton[i].classList.add('hide-vote');
      }
    }
  });

  startButton.addEventListener('click', function (e) {
    welcomeDisplay.classList.add('hide-display');
    container.classList.remove('no-scroll');
  });

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    goodbyeDisplay.classList.remove('hide-display');
    setTimeout(function () {
      container.classList.add('no-scroll');
    }, 2000);
    goodbyeLogo.classList.add('expand');
    setTimeout(function () {
      form.submit();
    }, 10000);
  });
})();
