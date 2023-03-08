//make player list
let gamestate = {
  player: [{ name: "" }, { name: "" }],
};

//create gameboard
let gameboard = document.getElementById("gameboard");
for (let i = 0; i < 9; i++) {
  let boardel = document.createElement("div");
  boardel.classList.add("board");
  gameboard.append(boardel);
}
//player name submit
let input = document.getElementById("submit");
function nameadd(input) {
  if (gamestate.player[0].name == true) {
    gamestate.player.name = input;
  }
  gamestate.player.name += input;
}
//list name

//reset board game
//check if tile is taken
//check if tie
//check for win
//
input.addEventListener("click", function () {
  nameadd(document.querySelector("input").value);
});
