var scores, roundScore, activePlayer, gamePlayng, prevDice, maxScore, p1, p2, dices;
init();
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';

document.querySelector('.btn-roll').addEventListener('click', function() {

    maxScore = document.getElementById('scoreinput').value;
    p1 = document.getElementById('input-p-0').value;
    p2 = document.getElementById('input-p-1').value;

    if(gamePlayng && maxScore > 0){

        if(p1 != false && p2 != false){

            document.getElementById('name-0').textContent = p1;
            document.getElementById('name-1').textContent = p2;

        }

        var dice = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;
        dices = dice + dice2;

        var diceDOM = document.querySelector('.dice');
        var diceDOM2 = document.querySelector('.dice2');

        diceDOM.style.display = 'block';
        diceDOM2.style.display = 'block';

        diceDOM.src = 'Dice-' + dice + '.png';
        diceDOM2.src = 'Dice-' + dice2 + '.png';

        if(dice !== 1 && dice2 !== 1){
            roundScore += dices;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

            if(dice == 6){
                if(dice == prevDice){
                    scores[activePlayer] = 0;
                    document.querySelector('#score-' + activePlayer).textContent = 0;
                    nextPlayer();
                }else{
                    prevDice = dice;
                }
            }
            else if(dice !== 6){
                prevDice = 0;
            }

            if(dice2 == 6){
                if(dice2 == prevDice){
                    scores[activePlayer] = 0;
                    document.querySelector('#score-' + activePlayer).textContent = 0;
                    nextPlayer();
                }else{
                    prevDice = dice2;
                }
            }
            else if(dice2 !== 6){
                prevDice = 0;
            }

        }else{
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlayng && maxScore > 0){
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        if(scores[activePlayer] > maxScore){
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
    prevDice = 0;
    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

//        document.querySelector('.dice').style.display = 'none';

//      document.querySelector('.player-0-panel').classList.remove('active');
//      document.querySelector('.player-1-panel').classList.add('active');
}

function init(){

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;
    maxScore = 0;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.getElementById('name-0').textContent = 'მოთამაშე 1';
    document.getElementById('name-1').textContent = 'მოთამაშე 2';
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    gamePlayng = true;
}

