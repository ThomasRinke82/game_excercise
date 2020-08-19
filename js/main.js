class Game {
  constructor(rounds, playerOne, playerTwo) {
    this._rounds = rounds;
    this._playerOne = playerOne;
    this._playerTwo = playerTwo;
  }

  play(playerOne, playerTwo) {
    console.log(playerOne.move);
    switch (playerOne.move + playerTwo.move) {
      case "rockscissors":
      case "scissorspaper":
      case "paperrock":
        playerOne.win();
        break;
      case "rockpaper":
      case "scissorsrock":
      case "paperscissors":
        playerTwo.win();
        break;
      default:
        break;
    }
  }

  get playerOne() {
    return this._playerOne;
  }

  get playerTwo() {
    return this._playerTwo;
  }

  get rounds() {
    return this._rounds;
  }
}

class Player {
  constructor(name) {
    this._name = name;
    this._gamesWon = 0;
    this._move = "";
  }

  get name() {
    return this._name;
  }

  get gamesWon() {
    return this._gamesWon;
  }

  get move() {
    return this._move;
  }

  selectSign(input) {
    this._move = input;
  }

  win() {
    this._gamesWon += 1;
  }
}

class Move {
  constructor(sign) {
    this._sign = sign;
  }

  get sign() {
    return this._sign;
  }
}

// Initial set-up - before start screen
let scissors = new Move("scissors");
let rock = new Move("rock");
let paper = new Move("paper");

//function to ask the player to insert name
//via prompt and then display the value as playerName

//player1
const btnNameOne = document.getElementById("player1-name");
const enterNameOne = document.getElementById("player1");

btnNameOne.addEventListener("click", function () {
  let playerName = prompt("Enter your name here:");
  enterNameOne.innerHTML = playerName;
  btnNameOne.style.display = "none";
});

//player2 -> find a way to reduce duplicate code
const btnNameTwo = document.getElementById("player2-name");
const enterNameTwo = document.getElementById("player2");

btnNameTwo.addEventListener("click", function () {
  let playerName = prompt("Enter your name here:");
  enterNameTwo.innerHTML = playerName;
  btnNameTwo.style.display = "none";
});

// Player Creation - start screen
let createFirst = new Player("Kevin");
let createSecond = new Player("Aria");

// Game Initialization
let newGame = new Game(3, createFirst, createSecond);

// Naming for Game Loop
let playerOne = newGame.playerOne;
let playerTwo = newGame.playerTwo;

//Game Loop
while (true) {
  if (
    playerOne.gamesWon === newGame.rounds ||
    playerTwo.gamesWon === newGame.rounds
  ) {
    console.log("Player won!");
    break;
  } else {
    // Player input has to be implemented - DOM
    playerOne.selectSign(scissors.sign);
    playerTwo.selectSign(rock.sign);
    newGame.play(playerOne, playerTwo);
    console.log(
      `${playerOne.name}: ${playerOne.gamesWon} - ${playerTwo.name}: ${playerTwo.gamesWon}`
    );
  }
}
