//player variables
let player1 = "Sonic";
let player2 = "Ring";
let currentPlayer = player1;
//taking input from form to set player names
let playerNames = document.getElementById("playerNames");
// -----------------Working on this---------------
//playerNames.addEventListener("submit", (event) => {
// event.preventDefault();
//let player1 = document.getElementById("player1")
//let player2 = document.getElementById("player2")
//})
//trying to make a function to wait before checking winner so the icon shows up...not working
//let waiter = setInterval(wait, 10000);
//let sec = 0;
//function wait() {
// sec = sec + 1;
//  if (sec >= 5) {
//  clearInterval(waiter);
//  return;
// }
//}

//array for keeping track of game state
let gameState = ["", "", "", "", "", "", "", "", ""];

//getting clock element and setting count to zero for the timer
let clock = document.getElementById("clock");
let count = 0;
//getting and disabling reset and replay buttons before the game starts
let resetButton = document.getElementById("reset");
let replayButton = document.getElementById("replay");
resetButton.disabled = true;
replayButton.disabled = true;
//getting status so we can set turn status above the game
let status = document.getElementById("status");

//get start button and add event listener of click
let startButton = document.getElementById("start");
startButton.addEventListener("click", (event) => {
  //when start is clicked the timer starts and the game is enabled
  game();
});

//game function called by clicking start
function game() {
  //start the game and prompt Player 1 to go!
  status.textContent = currentPlayer + "'s turn";
  //disable the start button
  startButton.disabled = true;
  resetButton.disabled = false;
  replayButton.disabled = false;
  //bring in the cells!
  let cells = document.getElementsByClassName("cell");

  //itterating over new HTML collection
  for (let cell of cells) {
    //Making individual cells on the board clickable and adding event listeners
    cell.addEventListener("click", (event) => {
      //when cell is clicked get the index of that cell for the game state and check if the cell has already been clicked
      cellIndex = parseInt(event.target.getAttribute("data-index-number"));
      if (gameState[cellIndex] !== "") {
        alert("That tile has already been played, choose another.");
        return;
      }
      //changing turns and filling a cell with the image of who's turn it is
      if (currentPlayer === player1) {
        event.target.style.backgroundImage = "url('/Images/Sonic_X.png')";
        //feeding the played cell to the game state
        gameState[cellIndex] = player1;
        //checking for a winner
        winner();
        //switching turns
        currentPlayer = player2;
        //displaying who's turn it is
        status.textContent = currentPlayer + "'s turn";
        // filling cell for when it's player 2's turn
      } else if (currentPlayer === player2) {
        event.target.style.backgroundImage = "url('/Images/Sonic_ring.png')";
        gameState[cellIndex] = player2;
        winner();
        currentPlayer = player1;
        status.textContent = currentPlayer + "'s turn";
      }
    });
  }

  let counter = setInterval(tick, 1000);
  //timer function
  function tick() {
    let hours = Math.floor(count / 3600);
    let minutes = Math.floor(count / 60);
    let seconds = count % 60;
    count = count + 1;
    // formatting the timer based on time elapsed
    clock.textContent = `Time elapsed 0${hours}:0${minutes}:0${seconds}`;
    // removing 0 when seconds is greater than 10
    if (seconds >= 10) {
      clock.textContent = `Time elapsed 0${hours}:0${minutes}:${seconds}`;
    }
    // removing 0 when minutes is greater than 10
    if (minutes >= 10) {
      clock.textContent = `Time elapsed 0${hours}:${minutes}:${seconds}`;
    }
  }
}

//function for setting win conditions and checking each time a turn is played
function winner() {
  //if 3 game states which are in a row are equal to each other a winner will be declared
  //the below "if" and "else if" statements check each possible win condition
  // win condition for top row
  if ( 
    gameState[0] !== "" &&
    gameState[0] === gameState[1] &&
    gameState[1] === gameState[2]
  ) {
    alert(`Congrats! ${currentPlayer} wins!`);
    // win condition for middle horizontal row
  } else if (
    gameState[3] !== "" &&
    gameState[3] === gameState[4] &&
    gameState[4] === gameState[5]
  ) {
    alert(`Congrats! ${currentPlayer} wins!`);
    // win condition for bottom row
  } else if (
    gameState[6] !== "" &&
    gameState[6] === gameState[7] &&
    gameState[7] === gameState[8]
  ) {
    alert(`Congrats! ${currentPlayer} wins!`);
    // win condition for left row
  } else if (
    gameState[0] !== "" &&
    gameState[0] === gameState[3] &&
    gameState[3] === gameState[6]
  ) {
    alert(`Congrats! ${currentPlayer} wins!`);
    // win condition for middle vertical row
  } else if (
    gameState[1] !== "" &&
    gameState[1] === gameState[4] &&
    gameState[4] === gameState[7]
  ) {
    alert(`Congrats! ${currentPlayer} wins!`);
    // win condition for right row
  } else if (
    gameState[2] !== "" &&
    gameState[2] === gameState[5] &&
    gameState[5] === gameState[8]
  ) {
    alert(`Congrats! ${currentPlayer} wins!`);
    // win condition for diagonal row from top left to bottom right
  } else if (
    gameState[0] !== "" &&
    gameState[0] === gameState[4] &&
    gameState[4] === gameState[8]
  ) {
    alert(`Congrats! ${currentPlayer} wins!`);
    // win condition for diagonal row from top right to bottom left
  } else if (
    gameState[2] !== "" &&
    gameState[2] === gameState[4] &&
    gameState[4] === gameState[6]
  ) {
    alert(`Congrats! ${currentPlayer} wins!`);
  } else if (gameState === []) {
    return;
  }
}
