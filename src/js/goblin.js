export default class Goblin {
  changeCells() {
    const cells = document.querySelectorAll(".board-item");
    let activeCell = cells[0];
    activeCell.classList.add("item-img");
    const changeCell = (index) => {
      index = Math.floor(Math.random() * 16);
      activeCell.classList.remove("item-img");
      activeCell = cells[index];
      activeCell.classList.add("item-img");
    };

    setInterval(changeCell, 1000);
  }
}
