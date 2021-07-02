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
//Making individual cells on the board clickable and adding events

//game function called by clicking start
function game() {
  //start the game and prompt Player X (Sonic) to go!
  status.textContent = `Sonic's turn`;
  //disable the start button
  startButton.disabled = true;
  //enabling clicking in the cells
  let cells = document.getElementsByClassName("cell");

  //not working to change turns
  if (status.textContent === `Sonic's turn`) {
    //itterating over new HTML collection
    for (let cell of cells) {
      cell.addEventListener("click", (event) => {
        event.target.style.backgroundImage = "url('/Images/Sonic_X.png')";
        status.textContent = "Ring's turn";
      });
    }
  }
//figure this out next


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
