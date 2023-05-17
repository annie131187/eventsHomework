export default class GameField {
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
