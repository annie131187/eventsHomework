/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/game_field.js
class GameField {
  constructor(element) {
    if (typeof element === "string") {
      element = document.querySelector(element);
    }
    this._element = element;
  }
  renderBoard() {
    const board = `
      <div class="status">
          Убито гоблинов: <span class="dead">0</span><br>
          Промахов: <span class="lost">0</span><br>
      </div>
      <div class="board">
        <div class="board-item"></div>
        <div class="board-item"></div>
        <div class="board-item"></div>
        <div class="board-item"></div>
        <div class="board-item"></div>
        <div class="board-item"></div>
        <div class="board-item"></div>
        <div class="board-item"></div>
        <div class="board-item"></div>
        <div class="board-item"></div>
        <div class="board-item"></div>
        <div class="board-item"></div>
        <div class="board-item"></div>
        <div class="board-item"></div>
        <div class="board-item"></div>
        <div class="board-item"></div>
      </div>
    `;
    this._element.insertAdjacentHTML("afterbegin", board);
  }
}
;// CONCATENATED MODULE: ./src/js/goblin.js
class Goblin {
  changeCells() {
    const cells = document.querySelectorAll(".board-item");
    let activeCell = cells[0];
    activeCell.classList.add("item-img");
    const changeCell = index => {
      index = Math.floor(Math.random() * 16);
      activeCell.classList.remove("item-img");
      activeCell = cells[index];
      activeCell.classList.add("item-img");
    };
    setInterval(changeCell, 1000);
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


const gameField = new GameField(".container");
gameField.renderBoard();
const goblin = new Goblin();
goblin.changeCells();
const board = document.querySelector(".board");
board.addEventListener("click", e => {
  const target = e.target;
  const dead = document.querySelector(".dead");
  const lost = document.querySelector(".lost");
  if (target.classList.contains("item-img")) {
    target.classList.toggle("item-img");
    dead.textContent++;
  } else {
    lost.textContent++;
    if (lost.textContent == '5') {
      dead.textContent = '0';
      lost.textContent = '0';
      alert("Вы проиграли!");
    }
  }
});
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;
//# sourceMappingURL=main.js.map