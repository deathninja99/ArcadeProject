//make player list
let gamestate = {
  player: [{ name: "" }, { name: "" }],
};
//create gameboard
let gameboard = document.getElementById("gameboard");
for (let i = 0; i < 8; i++) {
  let boardel = document.createElement("div");
  boardel.classList.add("board");
  gameboard.append(boardel);
}
