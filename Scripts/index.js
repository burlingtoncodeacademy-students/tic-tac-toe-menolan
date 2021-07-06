//player variables
let player1 = "Sonic";
let player2 = "Ring";
let currentPlayer = player1;

//array for keeping track of game state
let gameState = ["","","","","","","","",""]
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
  //start the game and prompt Player X (Sonic) to go!
  status.textContent = currentPlayer;
  //disable the start button
  startButton.disabled = true;
  //bring in the cells!
  let cells = document.getElementsByClassName("cell");

  //itterating over new HTML collection
  for (let cell of cells) {
    //Making individual cells on the board clickable and adding event listeners
    cell.addEventListener("click", (event) => {
      //changing turns and filling a cell with the image of who's turn it is
      if (currentPlayer === player1) {
        event.target.style.backgroundImage = "url('/Images/Sonic_X.png')";
        currentPlayer = player2;
        status.textContent = currentPlayer;
      } else if (currentPlayer === player2) {
        event.target.style.backgroundImage = "url('/Images/Sonic_ring.png')";
        currentPlayer = player1;
        status.textContent = currentPlayer;
      }
    });
  }

  let counter = setInterval(tick, 1);
  //timer function
  function tick() {
    let hours = Math.floor(count / 3600);
    let minutes = Math.floor(count / 60);
    let seconds = count % 60;
    count = count + 1;
    clock.textContent = `Time elapsed 0${hours}:0${minutes}:0${seconds}`;
    if (count > 3800) {
      clearInterval(counter);
    }
    if (seconds >= 10) {
      clock.textContent = `Time elapsed 0${hours}:0${minutes}:${seconds}`;
    }
    if (minutes >= 10) {
      clock.textContent = `Time elapsed 0${hours}:${minutes}:${seconds}`;
    }
  }
}
