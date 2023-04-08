<div class="tic-tac-toe">
  <div class="board">
    <div class="cell" onclick="play(this)"></div>
    <div class="cell" onclick="play(this)"></div>
    <div class="cell" onclick="play(this)"></div>
    <div class="cell" onclick="play(this)"></div>
    <div class="cell" onclick="play(this)"></div>
    <div class="cell" onclick="play(this)"></div>
    <div class="cell" onclick="play(this)"></div>
    <div class="cell" onclick="play(this)"></div>
    <div class="cell" onclick="play(this)"></div>
  </div>
  <div class="message"></div>
</div>


let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');
const message = document.querySelector('.message');

function play(cell) {
  if (cell.textContent === '') {
    cell.textContent = currentPlayer;
    checkWin();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkWin() {
  const winningCombos = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
    [0, 4, 8], [2, 4, 6] // diagonal
  ];
  for (const combo of winningCombos) {
    if (cells[combo[0]].textContent !== '' &&
        cells[combo[0]].textContent === cells[combo[1]].textContent &&
        cells[combo[1]].textContent === cells[combo[2]].textContent) {
      message.textContent = `${cells[combo[0]].textContent} wins!`;
      break;
    }
  }
}