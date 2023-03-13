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
  let boardtk = document.getElementsByClassName("board");
  for (i = 0; i < 3; i++) {
    for (j = 0; i < 3; j++) {
      if (boardtk.classList.contains("taken")) {
        boardtk.classList.remove("taken", "picked");
      }
    }
  }
});

// let board = getElementById("board");
// function getRow(gameboard, row) {
//   console.log(gameboard[row]);
// }
// gameboard.forEach((div) => {
//   console.log(test);
// });
//check if tie
//check for win
//event listeners
input.addEventListener("click", function () {
  nameadd(document.querySelector("input").value);
});
gameboard.addEventListener("click", (e) => {
  let row = e.target.id[0];
  let column = e.target.id[2];
  console.log(row);
  console.log(column);
});
