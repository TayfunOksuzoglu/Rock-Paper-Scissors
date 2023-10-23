let you;
let yourScore = 0;
let opponent;
let opponentScore = 0;

const choices = ['rock', 'paper', 'scissors'];

window.onload = function () {
  for (let i = 0; i < choices.length; i++) {
    // <img id="rock" src="rock.png">
    let choice = document.createElement('img');
    choice.id = choices[i];
    choice.src = choices[i] + '.png';
    document.getElementById('choices').append(choice);
    choice.addEventListener('click', selectChoice);
  }
};

function selectChoice() {
  you = this.id; // this.id = id of the img element that's clicked
  document.getElementById('your-choice').src = you + '.png';

  // random choice for opponent
  opponent = choices[Math.floor(Math.random() * 3)];

  document.getElementById('opponent-choice').src = opponent + '.png';

  // Check winner
  if (you === opponent) {
    yourScore++;
    opponentScore++;
  }

  if (you === 'rock') {
    if (opponent === 'scissors') yourScore++;

    if (opponent === 'paper') opponentScore++;
  }

  if (you === 'scissors') {
    if (opponent === 'paper') yourScore++;

    if (opponent === 'rock') opponentScore++;
  }

  if (you === 'paper') {
    if (opponent === 'rock') yourScore++;

    if (opponent === 'scissors') opponentScore++;
  }

  document.getElementById('your-score').innerText = `Your Score: ${yourScore}`;
  document.getElementById(
    'opponent-score'
  ).innerText = `Opponent Score: ${opponentScore}`;
}
