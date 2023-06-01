'use strict';

/* console.log(document.querySelector('.message')
.textContent);

document.querySelector('.message')
.textContent = "🥳🎉 Numero Corretto!!!";

document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 10;
document.querySelector(".guess").value = 23;*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //--->CHALLANGE
  document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.message').textContent = 'Start..';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = ' ';
    document.querySelector('.number').style.width = '15rem';
  });

  //--->CAMPO VUOTO
  if (!guess) {
    document.querySelector('.message').textContent = '🛑 No number!';
    alert('Non hai inserito nulla!!');

    //--->VITTORIA
  } else if (secretNumber === guess) {
    document.querySelector('.message').textContent = '🎉Hai vinto!!';

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    if (score > highscore) {
        highscore = score;
        document.querySelector(".highscore").textContent = score;
    }

    //--->NUMERO TROPPO ALTO
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '⬆️ Il numero è troppo alto!!';
      score--;
      document.querySelector('.score').textContent = score;

      //--->SCONFITTA
    } else {
      document.querySelector('.message').textContent = '❗ Hai perso!!';
      document.querySelector('.score').textContent = 0;
    }

    //--->NUMERO TROPPO BASSO
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        '⬇️ Il numero è troppo basso!!';
      score--;
      document.querySelector('.score').textContent = score;

      //--->SCONFITTA
    } else {
      document.querySelector('.message').textContent = '❗ Hai perso!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
