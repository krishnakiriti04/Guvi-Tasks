var PlayerClass = /** @class */ (function () {
    function PlayerClass(name) {
        this.ballscore = [];
        this.playerName = name;
        this.id = parseInt(name.split('-')[1]);
        this.isOut = false;
        this.ballcount = 1;
    }
    return PlayerClass;
}());
var TeamClass = /** @class */ (function () {
    function TeamClass(name) {
        this.player = [];
        this.teamid = parseInt(name.split('-')[1]);
        this.teamName = name;
        for (var i = 1; i < 11; i++) {
            this.player.push(new PlayerClass("player-" + i));
        }
    }
    return TeamClass;
}());
var GameClass = /** @class */ (function () {
    function GameClass() {
        this.team = [new TeamClass("team-1"), new TeamClass("team-2")];
        this.currTeam = this.team[0];
    }
    GameClass.prototype.gameStart = function () {
        document.getElementById('hit-2').setAttribute('disabled', 'true');
        document.getElementById('result').setAttribute('disabled', 'true');
    };
    GameClass.prototype.scoreGenerator = function () {
        return Math.floor(Math.random() * 7);
    };
    GameClass.prototype.switchTeam = function (teamno) {
        this.team[teamno - 1] = this.currTeam;
        this.currTeam = this.team[teamno];
    };
    GameClass.prototype.getPlayertotscore = function (pnum) {
        var totscore = 0;
        var arr = this.currTeam.player[pnum - 1].ballscore;
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].score > 0) {
                totscore += arr[i].score;
            }
        }
        this.currTeam.player[pnum - 1].playerscore = totscore;
        return totscore;
    };
    GameClass.prototype.getTeamScore = function () {
        var teamscore = 0;
        for (var i = 1; i <= this.currTeam.player.length; i++) {
            teamscore += parseInt(document.getElementById("t" + this.currTeam.teamid + "p" + i + "-total").innerHTML);
        }
        this.currTeam.teamscore = teamscore;
        return teamscore;
    };
    GameClass.prototype.winner = function () {
        var wonby = document.getElementById('wonby');
        var winteam;
        if (this.team[0].teamscore > this.team[1].teamscore) {
            wonby.innerHTML = 'Team-' + this.team[0].teamid;
            winteam = this.team[0];
        }
        else {
            wonby.innerHTML = 'Team-' + this.team[1].teamid;
            winteam = this.team[1];
        }
        this.mom(winteam);
    };
    GameClass.prototype.mom = function (winteam) {
        var highscorer = this.getHighscorer(winteam);
        var mom = document.getElementById('mom');
        mom.innerHTML = 'Player-' + highscorer.player.toString() + ' of Team-' + winteam.teamid;
    };
    GameClass.prototype.getHighscorer = function (teamno) {
        var highscorer1 = { player: 0, score: 0 };
        for (var i = 0; i < teamno.player.length; i++) {
            if (teamno.player[i].playerscore > highscorer1.score) {
                highscorer1.player = teamno.player[i].id;
                highscorer1.score = teamno.player[i].playerscore;
            }
        }
        return highscorer1;
    };
    return GameClass;
}());
// creating game object
var game = new GameClass();
game.gameStart();
// initialising values
var currteamid = game.currTeam.teamid;
var playernum = 0;
var ballnum = 1;
// Adding Timer
var timerValue = 0;
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
document.getElementById("hit-1").addEventListener('click', function () {
    updateballscore();
});
//on hit-2 button click
document.getElementById("hit-2").addEventListener('click', function () {
    updateballscore();
});
//on Generate Result button click
document.getElementById("result").addEventListener('click', function () {
    game.winner();
});
//function to update balls and scores of a player
function updateballscore() {
    if (ballnum <= 6 && playernum < 10 && !game.currTeam.player[playernum].isOut) {
        var td = document.getElementById("t" + currteamid + "p" + (playernum + 1) + "b" + ballnum);
        //generating score between 1-6
        var playerscore = game.scoreGenerator();
        td.innerHTML = playerscore.toString();
        var obj = { ball: ballnum, score: playerscore };
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
function switchteam() {
    var pscore = 0;
    if (playernum < 9) {
        pscore = game.getPlayertotscore(playernum);
    }
    if (currteamid === 1) {
        document.getElementById("score-" + currteamid).innerHTML = playernum < 9 ? pscore.toString() : game.getTeamScore().toString();
        //disabling hit-1 button and enabling hit-2 button
        document.getElementById('hit-2').removeAttribute('disabled');
        document.getElementById('hit-1').setAttribute('disabled', 'true');
        game.switchTeam(currteamid);
        currteamid = game.currTeam.teamid;
        playernum = 0;
        ballnum = 1;
    }
    else {
        document.getElementById("score-" + currteamid).innerHTML = playernum < 9 ? pscore.toString() : game.getTeamScore().toString();
        //disabling hit-1 and hit-2 buttons and enabling generate result button
        document.getElementById('hit-2').setAttribute('disabled', 'true');
        document.getElementById('hit-1').setAttribute('disabled', 'true');
        document.getElementById('result').removeAttribute('disabled');
    }
}
//function to print current player's score in UI
function printscore() {
    var tot = document.getElementById("t" + currteamid + "p" + (playernum + 1) + "-total");
    var playertot = game.getPlayertotscore(playernum + 1);
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
