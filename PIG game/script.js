gamePlay = true;
var num;
var roundScore;
// roundScore.innerHTML = 0;
gameStart();



function loadDice() {
    if (gamePlay) {
        this.currentScore = document.getElementById('currentScore-' + this.activePlayer);
        num = Math.ceil(Math.random() * 6);
        diceImage.innerHTML = `<img src="dice-${num}.png" alt="dice images"></img>`;
        diceImage.style.visibility = 'visible';
        this.currentScore.innerHTML = parseInt(this.currentScore.innerHTML) + num;
        if (num === 1) {
            changePlayer();
        }
    }

}

function changePlayer() {
    this.activePlayer === 1 ? this.activePlayer = 2 : this.activePlayer = 1;
    p1.classList.toggle('active');
    p2.classList.toggle('active');
    diceImage.style.visibility = 'hidden';
    this.currentScore.innerHTML = parseInt(0);
}



function hold() {
    if (gamePlay) {
        //add currentscore to round score
        roundScore = document.getElementById('roundScore-' + this.activePlayer);
        this.currentScore = document.getElementById('currentScore-' + this.activePlayer);
        scores[this.activePlayer - 1] += parseInt(this.currentScore.innerHTML);
        roundScore.innerHTML = parseInt(scores[this.activePlayer - 1]);
        if (this.roundScore.innerHTML >= 50) {
            document.getElementById('p-' + activePlayer).innerHTML = 'Winner !!!';
            diceImage.style.visibility = 'hidden';
            document.getElementById('p-' + this.activePlayer).classList.add('winner');
            document.getElementById('player-' + this.activePlayer).classList.remove('active');
            gamePlay = false;
            return 0;
        } else {
            changePlayer();
        }
    }

}

function gameStart() {
    this.activePlayer = 1;
    gamePlay = true;
    p1 = document.getElementById('player-1');
    p2 = document.getElementById('player-2');
    diceImage = document.getElementById('dice');
    scores = [0, 0];
    this.currentScore;
    document.getElementById('roundScore-1').innerHTML = 0;
    document.getElementById('roundScore-2').innerHTML = 0;
    document.getElementById('currentScore-1').innerHTML = 0;
    document.getElementById('currentScore-2').innerHTML = 0;
    document.getElementById('p-1').innerHTML = 'PLAYER-1';
    document.getElementById('p-2').innerHTML = 'PLAYER-2';
    diceImage.style.visibility = 'hidden';

    document.getElementById('p-1').classList.remove('winner');
    document.getElementById('p-2').classList.remove('winner');
    p1.classList.remove('active');
    p2.classList.remove('active');
    p1.classList.add('active');

}