let valorAtual = '0';
let operador = null;
let valorAnterior = null;

function adicionarValor(valor) {
  if (valorAtual === '0') {
    valorAtual = valor;
  } else {
    valorAtual += valor;
  }

  atualizarDisplay();
}

function atualizarDisplay() {
  const display = document.getElementById('resultado');
  display.textContent = valorAtual;
}

function limpar() {
  valorAtual = '0';
  operador = null;
  valorAnt