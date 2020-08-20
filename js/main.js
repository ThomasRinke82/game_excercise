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
        playerOne.move = "";
        playerTwo.move = "";
        break;
      case "rockpaper":
      case "scissorsrock":
      case "paperscissors":
        playerTwo.win();
          playerOne.move = "";
          playerTwo.move = "";
        break;
      default:
          playerOne.move = "";
          playerTwo.move = "";
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
  constructor() {
    this._name = "";
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

// --> Start Part of Thomas

//function to ask the player to insert name
//via prompt and then display the value as playerName

//Button naming
const btnNameOne = document.getElementById("player1-name");
const enterNameOne = document.getElementById("player1");
const btnNameTwo = document.getElementById("player2-name");
const enterNameTwo = document.getElementById("player2");
const startgame = document.getElementById("btn-startgame");
const gametext = document.getElementById("displayMessage");
const btnrock = document.getElementById("btnStone");
const btnpaper = document.getElementById("btnPaper");
const btnscissors = document.getElementById("btnScissors");
const btnclick = document.querySelector(".options");

// Player Creation - start screen
let createFirst = new Player();
let createSecond = new Player();

// Name change Buttons Event Listeners
btnNameOne.addEventListener("click", addPlayerName.bind(null, enterNameOne, btnNameOne, createFirst));
btnNameTwo.addEventListener("click", addPlayerName.bind(null, enterNameTwo, btnNameTwo, createSecond));

function addPlayerName(inputField, buttonChange, playerId) {
    let playerName = prompt("Enter your name here:");
    if (playerName === "") {
        addPlayerName(inputField, buttonChange, playerId);
    } else {
        inputField.innerHTML = playerName;
        buttonChange.style.display = "none";
        playerId._name = playerName;
        console.log(playerId);
    }
}

startgame.addEventListener("click", gameStart);

function gameStart() {

    // Game Initialization
    gametext.innerHTML = document.querySelector("#player1").textContent +  ", what is your choice?";
    let newGame = new Game(3, createFirst, createSecond);

    // Naming for Game Loop
    let playerOne = newGame.playerOne;
    let playerTwo = newGame.playerTwo;


    // True is Player 1
    let turn = true;

    //Game Loop
    while (true) {
        if (
            playerOne.gamesWon === newGame.rounds ||
            playerTwo.gamesWon === newGame.rounds
        ) {
            console.log("Player won!");
            break;
        } else {
            btnrock.addEventListener("click", () => {
                if (turn === true) {
                    playerOne.move = "rock";
                } else {
                    playerTwo.move = "rock";
                }
                if (playerOne.move === "" || playerTwo.move === "") {}
                else {
                    newGame.play(playerOne, playerTwo);
                    console.log(
                        `${playerOne.name}: ${playerOne.gamesWon} - ${playerTwo.name}: ${playerTwo.gamesWon}`);
                }
            })

            btnscissors.addEventListener("click", () => {
                if (turn === true) {
                    playerOne.move = "scissors";
                } else {
                    playerTwo.move = "scissors";
                }
                if (playerOne.move === "" || playerTwo.move === "") {}
                else {
                    newGame.play(playerOne, playerTwo);
                    console.log(
                        `${playerOne.name}: ${playerOne.gamesWon} - ${playerTwo.name}: ${playerTwo.gamesWon}`);
                }
            })

            btnpaper.addEventListener("click", () => {
                if (turn === true) {
                    playerOne.move = "paper";
                } else {
                    playerTwo.move = "paper";
                }
                if (playerOne.move === "" || playerTwo.move === "") {}
                else {
                    newGame.play(playerOne, playerTwo);
                    console.log(
                        `${playerOne.name}: ${playerOne.gamesWon} - ${playerTwo.name}: ${playerTwo.gamesWon}`);
                }
            })
        }
    }
}
