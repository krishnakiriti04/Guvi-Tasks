var Player = /** @class */ (function () {
    function Player(id) {
        this.score = [];
        this.totScore = 0;
        this.ballcount = 1;
        this.id = id;
        this.isOut = false;
    }
    Player.prototype.generateScore = function () {
        var tempscore = Math.floor(Math.random() * 7);
        var scoreobj = { ball: this.ballcount, score: tempscore };
        this.score.push(scoreobj);
        return tempscore;
    };
    Player.prototype.getTotalScore = function () {
        for (var i = 0; i < this.score.length; i++) {
            this.totScore += this.score[i].score;
        }
        console.log(this.totScore, this.score);
        return this.totScore;
    };
    return Player;
}());
var Team = /** @class */ (function () {
    function Team(id) {
        this.teamscore = 0;
        this.id = id;
    }
    Team.prototype.getTeamScore = function () {
        for (var i = 1; i <= 10; i++) {
            this.teamscore += parseInt(document.getElementById("t" + this.id + "p" + i + "-total").innerHTML);
        }
        console.log(this.teamscore);
        return this.teamscore;
    };
    return Team;
}());
var Game = /** @class */ (function () {
    function Game(team) {
        this.playerArray = [];
        this.team = team;
    }
    Game.prototype.gameStart = function () {
        var player1 = new Player(1);
        var player2 = new Player(2);
        var player3 = new Player(3);
        var player4 = new Player(4);
        var player5 = new Player(5);
        var player6 = new Player(6);
        var player7 = new Player(7);
        var player8 = new Player(8);
        var player9 = new Player(9);
        var player10 = new Player(10);
        this.playerArray.push(player1, player2, player3, player4, player5, player6, player7, player8, player9, player10);
        //disable generate result button
        document.getElementById('result').setAttribute('disabled', 'true');
        return this.playerArray;
    };
    Game.prototype.getTeamScore = function () {
        var team1 = new Team(this.team);
        this.teamScore = team1.getTeamScore();
        return this.teamScore;
    };
    Game.prototype.winner = function () {
    };
    Game.prototype.reset = function () {
    };
    Game.prototype.manofmatch = function () {
    };
    return Game;
}());
var game1 = new Game(1);
var playerArr1 = game1.gameStart();
game1.playerArray = playerArr1;
document.getElementById("hit-" + game1.team).addEventListener('click', function () {
    playerChange(playerArr1, game1.team);
});
var game2 = new Game(2);
var playerArr2 = game2.gameStart();
console.log(playerArr2);
document.getElementById("hit-" + game2.team).addEventListener('click', function () {
    playerChange(playerArr2, game2.team);
});
document.getElementById('result').onclick = function () {
    winner();
};
function winner() {
    var wonby = document.getElementById('wonby');
    var winteam;
    if (game1.teamScore > game2.teamScore) {
        wonby.innerHTML = 'Team-' + game1.team.toString();
        winteam = game1.team;
    }
    else {
        wonby.innerHTML = 'Team-' + game2.team.toString();
        winteam = game2.team;
    }
    mom(winteam);
}
function mom(winteam) {
    var team1highscorer = getHighscorer(winteam);
    //let team2highscorer = getHighscorer(2);
    var mom = document.getElementById('mom');
    mom.innerHTML = 'Player-' + team1highscorer.player.toString() + ' of Team-' + winteam;
}
function getHighscorer(teamno) {
    var highscorer1 = { player: 0, score: 0 };
    if (teamno == 1) {
        for (var i = 0; i < game1.playerArray.length; i++) {
            if (game1.playerArray[i].totScore > highscorer1.score) {
                highscorer1.player = (i + 1);
                highscorer1.score = game1.playerArray[i].totScore;
            }
        }
    }
    else {
        for (var i = 0; i < game2.playerArray.length; i++) {
            if (game2.playerArray[i].totScore > highscorer1.score) {
                highscorer1.player = (i + 1);
                highscorer1.score = game2.playerArray[i].totScore;
            }
        }
    }
    return highscorer1;
}
function playerChange(playerArr, teamnum) {
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
    else {
        if (teamnum == 1) {
            document.getElementById("score-" + teamnum).innerHTML = game1.getTeamScore().toString();
            document.getElementById('hit-2').removeAttribute('disabled');
            document.getElementById('hit-1').setAttribute('disabled', 'true');
        }
        else {
            document.getElementById("score-" + teamnum).innerHTML = game2.getTeamScore().toString();
            document.getElementById('hit-2').setAttribute('disabled', 'true');
            document.getElementById('hit-1').setAttribute('disabled', 'true');
            document.getElementById('result').removeAttribute('disabled');
        }
    }
}
function player(playerobj, teamnum) {
    var td = document.getElementById("t" + teamnum + "p" + playerobj.id + "b" + playerobj.ballcount);
    var temp = playerobj.generateScore();
    playerobj.ballcount += 1;
    td.innerHTML = temp;
    if (temp == 0) {
        playerobj.isOut = true;
        var totscore = playerobj.getTotalScore();
        var td1 = document.getElementById("t" + teamnum + "p" + playerobj.id + "-total");
        td1.innerHTML = totscore;
        return;
    }
    if (playerobj.ballcount === 7) {
        var totscore = playerobj.getTotalScore();
        var td1 = document.getElementById("t" + teamnum + "p" + playerobj.id + "-total");
        td1.innerHTML = totscore;
    }
}
