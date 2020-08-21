class Game {
  constructor(rounds, playerOne, playerTwo) {
    this._rounds = rounds;
    this._playerOne = playerOne;
    this._playerTwo = playerTwo;
    this._stateOfPlay = "newGame";
    this._roundsPlayed = 0;
  }

  // Play function checks what both players chose, then triggers score changes
  play(playerOne, playerTwo) {
    switch (playerOne.move.sign + playerTwo.move.sign) {
      case "rockscissors":
      case "scissorspaper":
      case "paperrock":
        playerOne.win();
        gametext.innerHTML = `${playerOne.name} wins! Next round!`;
        playerOne.move = "";
        playerTwo.move = "";
        break;
      case "rockpaper":
      case "scissorsrock":
      case "paperscissors":
        playerTwo.win();
        playerOne.move = "";
        playerTwo.move = "";
        gametext.innerHTML = `${playerTwo.name} wins! Next round!`;
        break;
      default:
        playerOne.move = "";
        playerTwo.move = "";
        gametext.innerHTML = `It's a draw! Next round!`;
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

  get stateOfPlay() {
    return this._stateOfPlay;
  }

  get roundsPlayed() {
    return this._roundsPlayed;
  }

  set roundsPlayed(num) {
    this._roundsPlayed = num;
  }

  roundPlayed() {
    this._roundsPlayed += 1;
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

  set gamesWon(num) {
    this._gamesWon = num;
  }

  get move() {
    return this._move;
  }

  set move(inp) {
    this._move = inp;
  }

  set name(name) {
    this._name = name;
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

// Function to enter names with a prompt
function addPlayer(number) {
  let playerName = prompt(`Player ${number} Please enter your name!`);
  if (playerName === "") {
    addPlayer();
  } else {
    return playerName;
  }
}
document.querySelector(".hands").style.display = "none";

//Button and field naming for easier access
const gametext = document.getElementById("displayMessage");
const btnrock = document.getElementById("btnRock");
const btnpaper = document.getElementById("btnPaper");
const btnscissors = document.getElementById("btnScissors");
const scoreOne = document.querySelector("#player1-score");
const scoreTwo = document.querySelector("#player2-score");
const numRounds = document.querySelector("#NumRounds");
const signOne = document.querySelector(".player1-hand");
const signTwo = document.querySelector(".player2-hand");

// Player Creation - start screen
let createFirst = new Player(addPlayer("1"));
let createSecond = new Player(addPlayer("2"));
let newGame = new Game(3, createFirst, createSecond);

// Naming for Game for easier access
let playerOne = newGame.playerOne;
let playerTwo = newGame.playerTwo;
let state = newGame.stateOfPlay;

// Set the displayed names to the entered names
document.querySelector("#player1").textContent = playerOne.name;
document.querySelector("#player2").textContent = playerTwo.name;

// First message
gametext.innerHTML = `${playerOne.name}, which weapon do you choose?`;

// Event listeners for the three buttons
btnrock.addEventListener("click", gameLoop);
btnscissors.addEventListener("click", gameLoop);
btnpaper.addEventListener("click", gameLoop);

function gameLoop(eve) {
  // New Game resets all values
  console.log(eve);
  if (state === "newGame") {
    playerOne.gamesWon = 0;
    playerTwo.gamesWon = 0;
    newGame.roundsPlayed = 0;
    state = "play1";
  }

  // Check who's turn it is
  if (state === "play1") {
    playerOne.move = new Move(eve.target.textContent);
    signOne.src = `./assets/${eve.target.textContent}.png`;
    state = "play2";
    gametext.innerHTML = `${playerTwo.name}, which weapon do you choose?`;
    document.querySelector(".hands").style.display = "none";
  } else if (state === "play2") {
    playerTwo.move = new Move(eve.target.textContent);
    signTwo.src = `./assets/${eve.target.textContent}.png`;
    newGame.play(playerOne, playerTwo);
    newGame.roundPlayed();
    state = "play1";
    document.querySelector(".hands").style.display = "flex";
  }
  // display the new scores
  scoreOne.textContent = playerOne.gamesWon;
  scoreTwo.textContent = playerTwo.gamesWon;
  numRounds.textContent = newGame.roundsPlayed;

  // Check if someone won
  if (playerOne.gamesWon === newGame.rounds) {
    gametext.innerHTML = `${playerOne.name} won ${newGame.rounds} rounds! Game over!`;
    state = "newGame";
  } else if (playerTwo.gamesWon === newGame.rounds) {
    gametext.innerHTML = `${playerTwo.name} won ${newGame.rounds} rounds! Game over!`;
    state = "newGame";
  }
}
