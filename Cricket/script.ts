interface IballScore {
    ball: number;
    score: number;
}

class PlayerClass {
    id: number;
    playerName: string;
    ballscore: Array<IballScore> = [];
    playerscore: number;
    ballcount: number;
    isOut: boolean;
    constructor(name) {
        this.playerName = name;
        this.id = parseInt(name.split('-')[1])
        this.isOut = false;
        this.ballcount = 1;
    }


}

class TeamClass {
    teamid: number;
    teamName: string;
    player: Array<PlayerClass> = [];
    teamscore: number;

    constructor(name) {
        this.teamid = parseInt(name.split('-')[1])
        this.teamName = name;
        for (let i = 1; i < 11; i++) {
            this.player.push(new PlayerClass(`player-${i}`));
        }
    }
}


class GameClass {
    team: [TeamClass, TeamClass];
    currTeam: TeamClass;
    winningTeam;
    manofmatch;

    constructor() {
        this.team = [new TeamClass(`team-1`), new TeamClass(`team-2`)];
        this.currTeam = this.team[0];
    }

    gameStart() {
        document.getElementById('hit-2').setAttribute('disabled', 'true');
        document.getElementById('result').setAttribute('disabled', 'true');
    }

    scoreGenerator() {
        return Math.floor(Math.random() * 7)
    }

    switchTeam(teamno) {
        this.team[teamno - 1] = this.currTeam;
        this.currTeam = this.team[teamno];
    }

    getPlayertotscore(pnum) {
        let totscore = 0;
        let arr = this.currTeam.player[pnum - 1].ballscore;
        for (let i = 0; i < arr.length; i++) {
          if(arr[i].score >0){
            totscore += arr[i].score;
          }
            
        }
        this.currTeam.player[pnum-1].playerscore = totscore;
        return totscore;
    }

    getTeamScore() {
        let teamscore = 0;
        for (let i = 1; i <= this.currTeam.player.length ; i++) {
            teamscore += parseInt(document.getElementById(`t${this.currTeam.teamid}p${i}-total`).innerHTML);
        }
        this.currTeam.teamscore = teamscore;

        return teamscore;
    }

    winner() {
        let wonby = document.getElementById('wonby');
        let winteam;
        if (this.team[0].teamscore > this.team[1].teamscore) {
            wonby.innerHTML = 'Team-'+this.team[0].teamid;
            winteam = this.team[0];
        } else {
            wonby.innerHTML ='Team-'+this.team[1].teamid;
            winteam = this.team[1];
        }
        this.mom(winteam);
    }


    mom(winteam) {
        let highscorer = this.getHighscorer(winteam);
        let mom = document.getElementById('mom');
        mom.innerHTML = 'Player-' + highscorer.player.toString() + ' of Team-' + winteam.teamid;
    }

    getHighscorer(teamno) {
        let highscorer1 = { player: 0, score: 0 }
            for (let i = 0; i < teamno.player.length; i++) {
                if (teamno.player[i].playerscore > highscorer1.score) {
                    highscorer1.player = teamno.player[i].id;
                    highscorer1.score = teamno.player[i].playerscore;
                }
            }
        return highscorer1;

    }
}


// creating game object
let game = new GameClass();
game.gameStart();

// initialising values
let currteamid = game.currTeam.teamid;
let playernum = 0;
let ballnum = 1;

// Adding Timer
let timerValue = 0;
// setInterval(() => {
//     timerValue += 1;
//     document.getElementById('timerValue').innerHTML = timerValue.toString();
//     if(timerValue > 20){
//         switchteam();
//         timerValue = 0;
//         return ;
//     }
// }, 1000);

//on hit-1 button click
document.getElementById(`hit-1`).addEventListener('click', function () {
    updateballscore();
})

//on hit-2 button click
document.getElementById(`hit-2`).addEventListener('click', function () {
    updateballscore();

})

//on Generate Result button click
document.getElementById(`result`).addEventListener('click', function () {
    
    game.winner();

})


//function to update balls and scores of a player

function updateballscore() {
    if (ballnum <= 6 && playernum < 10 && !game.currTeam.player[playernum].isOut) {
        let td = <HTMLTableCellElement>document.getElementById(`t${currteamid}p${playernum + 1}b${ballnum}`);

        //generating score between 1-6
        let playerscore = game.scoreGenerator()
        td.innerHTML = playerscore.toString();
        let obj = { ball: ballnum, score: playerscore };
        game.currTeam.player[playernum + 1 - 1].ballscore.push(obj);
        ballnum++;

        //condition to check if a player is out or not
        if (playerscore == 0) {
            game.currTeam.player[playernum].isOut = true;
            printscore();
        }

    }
    else {
        // condition for switching teams
        if (playernum > 9) {
            switchteam();       
        }
        //if conditions fails, update the team score in UI
        else {
            printscore();
        }

    }

}


//function to switch team from 1 to 2
function switchteam(){
    let pscore = 0;
    if(playernum<9){
        pscore = game.getPlayertotscore(playernum);
    }
    if (currteamid === 1) {
        document.getElementById(`score-${currteamid}`).innerHTML = playernum<9 ? pscore.toString() : game.getTeamScore().toString();
        //disabling hit-1 button and enabling hit-2 button
        document.getElementById('hit-2').removeAttribute('disabled');
        document.getElementById('hit-1').setAttribute('disabled', 'true');
        game.switchTeam(currteamid);
        currteamid = game.currTeam.teamid;
        playernum = 0;
        ballnum = 1;
    }
    else {
        document.getElementById(`score-${currteamid}`).innerHTML = playernum<9 ? pscore.toString() : game.getTeamScore().toString();

        //disabling hit-1 and hit-2 buttons and enabling generate result button
        document.getElementById('hit-2').setAttribute('disabled', 'true');
        document.getElementById('hit-1').setAttribute('disabled', 'true');
        document.getElementById('result').removeAttribute('disabled');
    }
}

//function to print current player's score in UI
function printscore() {
    let tot = <HTMLTableCellElement>document.getElementById(`t${currteamid}p${playernum + 1}-total`);
    let playertot = game.getPlayertotscore(playernum + 1);
    tot.innerHTML = playertot.toString();
    ballnum = 1;
    playernum++;
}



// *****************************************

// for(let i=0;i<10;i++){
//     let currplayer = game.currTeam.player[i];
//     console.log('curr player :'+currplayer.playerName);
//     for(let j=0;j<6;j++){
//         if(currplayer.ballcount < 7 && !currplayer.isOut){
//             currplayer.ballcount++;
//             let scr = game.scoreGenerator();
//             let obj = {ball : j+1, score : scr };
//             currplayer.ballscore.push(obj);
//             // currplayer.ballscore[j].ball = j+1;
//             // currplayer.ballscore[j].score = game.scoreGenerator();
//             console.log(currplayer.ballscore[j]);
//             let td = <HTMLTableRowElement>document.getElementById(`t${game.currTeam.teamid}p${i+1}b${j+1}`);
//             td.innerHTML = scr.toString();
//         }
//     }
// }
// console.log(currteamid, playernum+1);