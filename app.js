/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

// hide dice image before first rolls
document.querySelector('.dice').style.display = 'none';

// add event listener to .btn-roll element
// run anonymous function upon click
document.querySelector('.btn-roll').addEventListener('click', function() {
  // 1. generate random number between 1 and 6
  dice = Math.floor(Math.random()*6) + 1;

  // 2. update dice image and current roll value based on dice value
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png';
  // manipulate DOM element's text through query Selector
  document.querySelector('#current-' + activePlayer).textContent = dice;
});
