import GameField from "./game_field";
import Goblin from "./goblin";

const gameField = new GameField(".container");
gameField.renderBoard();
const goblin = new Goblin();
goblin.changeCells();

const board = document.querySelector(".board");
board.addEventListener("click", (e) => {
  const target = e.target;
  const dead = document.querySelector(".dead");
  const lost = document.querySelector(".lost");
  if (target.classList.contains("item-img")) {
    target.classList.toggle("item-img");
    dead.textContent++;

  } else  {
    lost.textContent++;
    if (lost.textContent == '5') {
      dead.textContent = '0';
      lost.textContent = '0';
      alert("Вы проиграли!");
    }
  }
});
