//make player list
let gamestate = {
  player: [{ name: "" }, { name: "" }],
  boardarr: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
};
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
//create gameboard
function renderBoard() {
  let gameboard = document.getElementById("gameboard");
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let boardel = document.createElement("div");
      boardel.classList.add("board");
      boardel.id = `${i}-${j}`;

      gameboard.append(boardel);
    }
  }
}
renderBoard();
//player name submit
//submit button
let input = document.getElementById("submit");
//adds name to gamestate
function nameadd(input) {
  //if gamesate player1 is taken
  if (gamestate.player[0].name !== "") {
    //add name to player 2
    gamestate.player[1].name = input;
    player2.innerText += gamestate.player[1].name;
  } else {
    //else add name to player 1
    gamestate.player[0].name = input;
    player1.innerText += gamestate.player[0].name;
  }
  if (gamestate.player[0].name !== "" && gamestate.player[1].name !== "") {
    let text = document.getElementById("text");
    let input = document.getElementById("submit");
    text.style.display = "none";
    input.style.display = "none";
  }
}
//pick a tile
gameboard.addEventListener("click", (e) => {
  //if there is not 2 players alert
  if (gamestate.player[0].name === "" || gamestate.player[1].name === "") {
    alert("not enough players");
    //else if the tile is taken alert
  } else if (e.target.classList.contains("taken")) {
    alert("already taken");
  } else {
    //take it and change it to player
    e.target.classList.add("picked", "taken");
    let used = document.getElementById("picked");
    console.log(used);
  }
});
//reset board game
let boardtk = document.getElementsByClassName("board");
let reset = document.getElementById("reset");
reset.addEventListener("click", (e) => {
  //remove player name from gamestate
  for (i = 0; i < gamestate.player.length; i++) {
    gamestate.player[i].name = "";
    console.log("deleted");
  }
  //remove player name from html
  player1.innerText = "player1:";
  player2.innerText = "player2:";
  //resets board
  for (i = 0; i < boardtk.length; i++) {
    if (boardtk[i].classList.contains("taken")) {
      boardtk[i].classList.remove("picked", "taken");
      boardtk[i].innerText = " ";
    }
  }
  //resets input
  let input = document.getElementById("submit");
  text.style.display = "initial";
  input.style.display = "initial";
});
// getboard row
function getrow(gameboard, row) {
  let boardarr = gamestate.boardarr;
  for (let i = 0; i < boardarr.length; i++) {
    console.log(boardarr[i][0]);
  }
}
//getboard column
function getcolumn(gameboard, col) {
  let gameboards;
  let colarr = [];
  for (let i = 0; i < gameboard.length; i++) {
    colarr.push(gameboard[i][col]);
  }
}
//check if tie
//check for win
//event listeners
input.addEventListener("click", function () {
  nameadd(document.querySelector("input").value);
});
gameboard.addEventListener("click", (e) => {
  let boardarr = gamestate.boardarr;
  let target = e.target;
  let row = e.target.id[0];
  let column = e.target.id[2];
  boardarr[row][column] = "x";
  target.innerText = "x";
});
