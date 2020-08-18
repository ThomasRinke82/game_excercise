class Game {
    constructor(player1, player2) {
        this._player1 = player1;
        this._player2 = player2;
    }
    
    winDuell(playerOneMove, playerTwoMove) {
        switch (playerOneMove + playerTwoMove) {
          case "rockscissors":
          case "scissorspaper":
          case "paperrock":
            //winPlayerOne();
            console.log('player 1');
            break;
          case "rockpaper":
          case "scissorsrock":
          case "paperscissors":
            //winPlayerTwo();
            console.log('player 2');
            break;
          default:
            console.log('draw');
            //draw();
        }
      }
    // incremen
}

class Player {
    constructor(name) {
        this._name = name;
        this._gamesWon = 0;
        this._move = "";
    }

    selectSign(input) {
        this._move = input;
    }

    get move() {
        return this._move;
    }

    get gamesWon() {
        return this._gamesWon;
    }
}

class Move {
    constructor(sign) {
        this._sign = sign;
    }
}


let firstPlayer = new Player("Kevin");
let secondPlayer = new  Player("Aria");

let newGame = new Game(firstPlayer, secondPlayer);
firstPlayer.selectSign("Scissors");
secondPlayer.selectSign("Rock");
// evaluate who won --> Thomas

while (true) {
    if (firstPlayer.gamesWon === 3 || secondPlayer.gamesWon === 3) {
        console.log("Player won!");
        break;
    } else {
        play(firstPlayer, secondPlayer);
        newGame.displayScore;
    }
}

