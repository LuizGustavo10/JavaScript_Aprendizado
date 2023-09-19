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



ouuuuuuuuuuu

<div>
  <h1>Gerador de insultos aleatórios</h1>
  <p id="insult"></p>
  <button onclick="generateInsult()">Gerar insulto</button>
</div>


const adjectives = ['fedorento', 'idiota', 'preguiçoso', 'burro', 'feio'];
const nouns = ['babuíno', 'tolo', 'prego', 'pateta', 'patinho'];

function generateInsult() {
  const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
  const insult = `Você é um(a) ${randomAdjective} ${randomNoun}!`;
  document.getElementById('insult').textContent = insult;
}


gerador de piadas

const jokes = [
  'Por que o programador colocou um ar-condicionado no computador? Para ele não esquentar!',
  'Por que a galinha atravessou a rua? Para chegar ao outro lado!',
  'Por que o cavalo foi preso? Porque ele era estável.',
  'O que é um ponto verde em cima de uma árvore? Um ervilha sentada!',
  'O que um terapeuta disse para o Java? Você tem um problema de objeto!',
  'Por que o JavaScript perdeu o emprego? Porque ele não sabia como lidar com a pressão!',
];

function generateJoke() {
  const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
  document.getElementById('joke').textContent = randomJoke;
}


advinha numero
const randomNumber = Math.floor(Math.random() * 100) + 1;
let guesses = 0;

function checkGuess() {
  const guess = document.getElementById('guess').value;
  if (guess < 1 || guess > 100) {
    document.getElementById('feedback').textContent = 'Por favor, insira um número entre 1 e 100.';
  } else if (guess == randomNumber) {
    guesses++;
    document.getElementById('feedback').textContent = `Parabéns, você acertou o número em ${guesses} tentativas!`;
  } else if (guess < randomNumber) {
    guesses++;
    document.getElementById('feedback').textContent = 'O número é maior.';
  } else {
    guesses++;
    document.getElementById('feedback').textContent = 'O número é menor.';
  }
}


gerador de memes
<div>
  <h1>Gerador de memes</h1>
  <img id="meme" src="" />
  <button onclick="generateMeme()">Gerar meme</button>
</div>

const memes = [
  'https://i.imgur.com/L6UHR7M.jpg',
  'https://i.imgur.com/2AHaFaP.jpg',
  'https://i.imgur.com/pF1C0vJ.jpg',
  'https://i.imgur.com/8Ys7gq3.jpg',
  'https://i.imgur.com/qNTe7CH.jpg',
];

function generateMeme() {
  const randomMeme = memes[Math.floor(Math.random() * memes.length)];
  document.getElementById('meme').src = randomMeme;
}