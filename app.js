/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice;

resetScores();

function resetScores() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  // hide dice image before first rolls
  document.querySelector('.dice').style.display = 'none';

  document.querySelector('.btn-roll').style.display = 'block';
  document.querySelector('.btn-hold').style.display = 'block';

  // set score-0, score-1, current-0 and current-1 to 0
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-0').textContent = '0';

  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';

  document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
  document.querySelector('.player-' + activePlayer + '-panel').classList.add('active');
}

// event handler for roll dice button
document.querySelector('.btn-roll').addEventListener('click', function() {
  // 1. generate random number between 1 and 6
  dice = Math.floor(Math.random()*6) + 1;

  // 2. update dice image and current roll value based on dice value
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'dice-' + dice + '.png';

  // 3. update round score if dice roll is not 1
  if(dice !== 1) {
    // add score
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else {
    switchPlayers();
  }
});

// event handler for hold score button
document.querySelector('.btn-hold').addEventListener('click', function() {
  // add current score to global score
  scores[activePlayer] += roundScore;

  // update UI
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

  // check if player won the game
  if(scores[activePlayer] >= 100) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.btn-roll').style.display = 'none';
    document.querySelector('.btn-hold').style.display = 'none';
  } else {
    // switch players
    switchPlayers();
  }
});

// event handler for new game button
document.querySelector('.btn-new').addEventListener('click', resetScores);

function switchPlayers() {
  // switch activePlayer
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

  // reset round score to 0
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  // toggle adds active class if not active or removes if already active
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  // hide dice after 1 is rolled
  document.querySelector('.dice').style.display = 'none';
}
