//make player list
let gamestate = {
  player: [{ name: "" }, { name: "" }],
};
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
//create gameboard
let gameboard = document.getElementById("gameboard");
for (let i = 0; i < 9; i++) {
  let boardel = document.createElement("div");
  boardel.classList.add("board");
  gameboard.append(boardel);
}
//player name submit
//submit button
let input = document.getElementById("submit");
//adds name to gamestate
function nameadd(input) {
  //if gamesate player1 is taken
  if (gamestate.player[0].name == true) {
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
gameboard.addEventListener("click", (e) => {});
//reset board game
//check if tile is taken
//check if tie
//check for win
//event listeners
input.addEventListener("click", function () {
  nameadd(document.querySelector("input").value);
});
