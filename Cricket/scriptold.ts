
type TeamNum = 1 | 2;

interface playerScore {
    ball: number;
    score: number
}

class Player {
    id: number;
    score: Array<playerScore> = [];
    totScore: number = 0;
    ballcount: number = 1;
    isOut: boolean;

    constructor(id: number) {
        this.id = id;
        this.isOut = false;
    }

    generateScore(): number {
        let tempscore = Math.floor(Math.random() * 7);
        let scoreobj = { ball: this.ballcount, score: tempscore };
        this.score.push(scoreobj);
        return tempscore;
    }

    getTotalScore(): number {
        for (let i = 0; i < this.score.length; i++) {
            this.totScore += this.score[i].score;
        }
        console.log(this.totScore, this.score);
        return this.totScore;
    }
}

class Team {
    id: TeamNum;
    teamscore: number = 0;

    constructor(id: TeamNum) {
        this.id = id;
    }

    getTeamScore() {
        for (let i = 1; i <= 10; i++) {
            this.teamscore += parseInt(document.getElementById(`t${this.id}p${i}-total`).innerHTML);
        }
        console.log(this.teamscore);
        return this.teamscore;
    }
}

class Game {
    team: TeamNum;
    playerArray : Array<Player> = [];
    teamScore : number;

    constructor(team){
        this.team = team;
    }

    gameStart() {
         let player1 = new Player(1);
         let player2 = new Player(2);
         let player3 = new Player(3);
         let player4 = new Player(4);
         let player5 = new Player(5);
         let player6 = new Player(6);
         let player7 = new Player(7);
         let player8 = new Player(8);
         let player9 = new Player(9);
         let player10 = new Player(10);
        this.playerArray.push(player1,player2,player3,player4,player5,player6,player7,player8,player9,player10);

        //disable generate result button
        document.getElementById('result').setAttribute('disabled','true');
        
        return this.playerArray;
    }

    getTeamScore(){
        let team1 = new Team(this.team);
        this.teamScore = team1.getTeamScore();
        return this.teamScore;
    }

    winner(){

    }

    reset(){

    }

    manofmatch(){

    }
}


let game1 = new Game(1);
let playerArr1 = game1.gameStart();
game1.playerArray = playerArr1;

document.getElementById(`hit-${game1.team}`).addEventListener('click', function () {
    playerChange(playerArr1,game1.team);
})

let game2 = new Game(2);
let playerArr2 = game2.gameStart();
console.log(playerArr2);

document.getElementById(`hit-${game2.team}`).addEventListener('click', function () {
    playerChange(playerArr2,game2.team);
})


document.getElementById('result').onclick = function(){
    winner();
}

function winner(){
    let wonby = document.getElementById('wonby');
    let winteam;
    if(game1.teamScore > game2.teamScore){
        wonby.innerHTML = 'Team-'+game1.team.toString()
        winteam = game1.team;
    } else{
        wonby.innerHTML = 'Team-'+game2.team.toString();
        winteam = game2.team;
    } 
    mom(winteam);
}

function mom(winteam){
  let team1highscorer = getHighscorer(winteam);
  //let team2highscorer = getHighscorer(2);
  let mom = document.getElementById('mom');
  mom.innerHTML = 'Player-'+team1highscorer.player.toString()+' of Team-'+winteam;
}

function getHighscorer(teamno){
    let highscorer1 = {player : 0, score : 0}
    if(teamno == 1){
        for(let i=0;i<game1.playerArray.length;i++){
            if(game1.playerArray[i].totScore > highscorer1.score){
                highscorer1.player = (i+1);
                highscorer1.score = game1.playerArray[i].totScore;
            }
        }
    }
    else{
        for(let i=0;i<game2.playerArray.length;i++){
            if(game2.playerArray[i].totScore > highscorer1.score){
                highscorer1.player = (i+1);
                highscorer1.score = game2.playerArray[i].totScore;
            }
        }
    }
    return highscorer1;
    
}




function playerChange(playerArr,teamnum: TeamNum) {
    if (playerArr[0].ballcount < 7 && !playerArr[0].isOut) {
        player(playerArr[0], teamnum);
    }
    else if (playerArr[1].ballcount < 7 && !playerArr[1].isOut) {
        player(playerArr[1], teamnum);
    }
    else if (playerArr[2].ballcount < 7 && !playerArr[2].isOut) {
        player(playerArr[2], teamnum);
    }
    else if (playerArr[3].ballcount < 7 && !playerArr[3].isOut) {
        player(playerArr[3], teamnum);
    }
    else if (playerArr[4].ballcount < 7 && !playerArr[4].isOut) {
        player(playerArr[4], teamnum);
    }
    else if (playerArr[5].ballcount < 7 && !playerArr[5].isOut) {
        player(playerArr[5], teamnum);
    }
    else if (playerArr[6].ballcount < 7 && !playerArr[6].isOut) {
        player(playerArr[6], teamnum);
    }
    else if (playerArr[7].ballcount < 7 && !playerArr[7].isOut) {
        player(playerArr[7], teamnum);
    }
    else if (playerArr[8].ballcount < 7 && !playerArr[8].isOut) {
        player(playerArr[8], teamnum);
    }
    else if (playerArr[9].ballcount < 7 && !playerArr[9].isOut) {
        player(playerArr[9], teamnum);
    }
    else{
        if(teamnum == 1){
            document.getElementById(`score-${teamnum}`).innerHTML =  game1.getTeamScore().toString();
            document.getElementById('hit-2').removeAttribute('disabled');
            document.getElementById('hit-1').setAttribute('disabled','true');
        }
        else{
            document.getElementById(`score-${teamnum}`).innerHTML =  game2.getTeamScore().toString();
            document.getElementById('hit-2').setAttribute('disabled','true');
            document.getElementById('hit-1').setAttribute('disabled','true');
            document.getElementById('result').removeAttribute('disabled');
        }  
    }
}


function player(playerobj, teamnum) {
    let td = <HTMLTableCellElement>document.getElementById(`t${teamnum}p${playerobj.id}b${playerobj.ballcount}`);
    let temp = playerobj.generateScore();
    playerobj.ballcount += 1;
    td.innerHTML = temp;
    if (temp == 0) {
        playerobj.isOut = true;
        let totscore = playerobj.getTotalScore();
        let td1 = <HTMLTableCellElement>document.getElementById(`t${teamnum}p${playerobj.id}-total`);
        td1.innerHTML = totscore;
        return;
    }

    if (playerobj.ballcount === 7) {
        let totscore = playerobj.getTotalScore();
        let td1 = <HTMLTableCellElement>document.getElementById(`t${teamnum}p${playerobj.id}-total`);
        td1.innerHTML = totscore;
    }

}