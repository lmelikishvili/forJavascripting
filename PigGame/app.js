var scores, roundScore, activePlayer, gamePlayng;
init();
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlayng){
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'Dice-' + dice + '.png';

        if(dice !== 1){
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{
            nextPlayer();
        }
    }
});


document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlayng){
         scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        if(scores[activePlayer] >= 20){
            document.querySelector('#name-' + activePlayer).textContent = 'გამარჯვებული';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            gamePlayng = false;
        }else{
            nextPlayer();
        }
    }
})

document.querySelector('.btn-new').addEventListener('click', init)


function nextPlayer(){

        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        document.querySelector('#current-0').textContent = 0;
        document.querySelector('#current-1').textContent = 0;
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';

//      document.querySelector('.player-0-panel').classList.remove('active');
//      document.querySelector('.player-1-panel').classList.add('active');
}

function init(){

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.remove('winner');   document.querySelector('.player-1-panel').classList.remove('winner');
    document.getElementById('name-0').textContent = 'მოთამაშე 1';   document.getElementById('name-1').textContent = 'მოთამაშე 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    gamePlayng = true;
}

