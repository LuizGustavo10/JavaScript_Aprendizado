// Configurações do jogo
var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
var players = [];
var food = [];
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;

canvas.width = screenWidth;
canvas.height = screenHeight;

// Classe Jogador
function Player(color) {
  this.x = screenWidth / 2;
  this.y = screenHeight / 2;
  this.radius = 10;
  this.color = color;
  this.velocityX = 0;
  this.velocityY = 0;

  this.update = function() {
    this.x += this.velocityX;
    this.y += this.velocityY;

    // Colisão com comida
    for (var i = 0; i < food.length; i++) {
      var dx = this.x - food[i].x;
      var dy = this.y - food[i].y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.radius + food[i].radius) {
        if (this === players[0]) {
          food.splice(i, 1);
          this.radius += 1;
        } else if (this === players[1] && players[1].radius > players[0].radius) {
          players.splice(0, 1);
          this.radius += 1;
        }
      }
    }
  };

  this.draw = function() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    context.fillStyle = this.color;
    context.fill();
    context.closePath();
  };
}

// Classe Comida
function Food(x, y) {
  this.x = x;
  this.y = y;
  this.radius = 5;
  this.color = "#00ff00";

  this.draw = function() {
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    context.fillStyle = this.color;
    context.fill();
    context.closePath();
  };
}

// Atualização do jogo
function update() {
  context.clearRect(0, 0, screenWidth, screenHeight);

  // Atualizar e desenhar jogadores
  for (var i = 0; i < players.length; i++) {
    players[i].update();
    players[i].draw();
  }

  // Desenhar comida
  for (var j = 0; j < food.length; j++) {
    food[j].draw();
  }

  requestAnimationFrame(update);
}

// Função de inicialização
function init() {
  players.push(new Player("#ff0000")); // Jogador 1
  players.push(new Player("#0000ff")); // Jogador 2

  // Criar comida aleatória
  for (var i = 0; i < 100; i++) {
    var x = Math.random() * screenWidth;
    var y = Math.random() * screenHeight;
    food.push(new Food(x, y));
  }

  update();
}

// Eventos de teclado (Jogador 1)
document.addEventListener("keydown", function(event) {
  var keyCode = event.keyCode;

  if (keyCode === 37) {
    // Esquerda
    players[0].velocityX = -1;
  } else if (keyCode === 39) {
    // Direita
    players[0].velocityX = 1;
  } else if (keyCode === 38) {
    // Cima
    players[0].velocityY = -1;
  } else if (keyCode === 40) {
    // Baixo
    players[0].velocityY = 1;
  }
});

document.addEventListener("keyup", function(event) {
  var keyCode = event.keyCode;

  if (keyCode === 37 || keyCode === 39) {
    // Parar movimento horizontal
    players[0].velocityX = 0;
  } else if (keyCode === 38 || keyCode === 40) {
    // Parar movimento vertical
    players[0].velocityY = 0;
  }
});

// Eventos de teclado (Jogador 2)
document.addEventListener("keydown", function(event) {
  var keyCode = event.keyCode;

  if (keyCode === 65) {
    // A
    players[1].velocityX = -1;
  } else if (keyCode === 68) {
    // D
    players[1].velocityX = 1;
  } else if (keyCode === 87) {
    // W
    players[1].velocityY = -1;
  } else if (keyCode === 83) {
    // S
    players[1].velocityY = 1;
  }
});

document.addEventListener("keyup", function(event) {
  var keyCode = event.keyCode;

  if (keyCode === 65 || keyCode === 68) {
    // Parar movimento horizontal
    players[1].velocityX = 0;
  } else if (keyCode === 87 || keyCode === 83) {
    // Parar movimento vertical
    players[1].velocityY = 0;
  }
});

// Iniciar o jogo
init();