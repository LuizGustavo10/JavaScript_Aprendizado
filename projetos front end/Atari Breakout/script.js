
//ideia de colocar som quando rebater
var canvas = document.getElementById("gameCanvas");
var desenho = canvas.getContext("2d");

var rebatedorAltura = 10;
var rebatedorLargura = 70;
var rebatedorX = (canvas.width - rebatedorLargura) / 2;
var setaDireita = false;
var setaEsquerda = false;

var bolaRadius = 15;
var bolaX = canvas.width / 2;
var bolaY = canvas.height -30;
var bolaDX = 2; //diracao bola, velocidade bola
var bolaDY = -2; //diracao bola, velocidade bola

var tijolosPorLinha = 3;
var tijolosPorColuna = 6;
var tijoloLargura = 75;
var tijoloAltura = 20;
var tijoloEspaçamento = 10;
var EspaçamentoSuperiorQuadro = 30;
var EspaçamentoEsquerdoQuadro = 30;
var tijolos = [];

// bolaDX = JSON.parse(localStorage.getItem('bolaDX'));
// bolaDY = JSON.parse(localStorage.getItem('bolaDY'));
// tijolosPorLinha = JSON.parse(localStorage.getItem('tijolosPorLinha'));
// tijolosPorColuna = JSON.parse(localStorage.getItem('tijolosPorColuna'));
//https://x2download.app/pt50/download-youtube-to-mp3 ideia

function facil(){
    tijolosPorLinha = 3;
    tijolosPorColuna = 6;
    tijoloLargura = 75;
    tijoloAltura = 20;
    bolaRadius = 20;
    bolaDX = 4; //diracao bola, velocidade bola
    bolaDY = -4; //diracao bola, velocidade bola
    rebatedorLargura = 40;
}


for (var coluna = 0; coluna < tijolosPorColuna; coluna++) { //percorre as colunas
    tijolos[coluna] = []; //cria uma lista vazia

    for (var linha = 0; linha < tijolosPorLinha; linha++) {//percorre linhas na colna
        //ria um objeto para representar um tijolo em uma determinada posição (coluna, linha)
        // x e y, que representam as coordenadas do tijolo
        tijolos[coluna][linha] = { x: 0, y: 0, ativo: 1 };

        //Essa é apenas uma inicialização padrão, e as coordenadas serão atualizadas posteriormente com valores específicos para cada tijolo com base na lógica do jogo.
    }
}

document.addEventListener("keydown", descerDaTecla);
document.addEventListener("keyup", subirDaTecla);

//ativa teclas
function descerDaTecla(event) {
    if (event.key === "Right" || event.key === "ArrowRight") {
        setaDireita = true;
    } else if (event.key === "Left" || event.key === "ArrowLeft") {
        setaEsquerda = true;
    }



    
}

//desativa teclas
function subirDaTecla(event) {
    if (event.key === "Right" || event.key === "ArrowRight") {
        setaDireita = false;
    } else if (event.key === "Left" || event.key === "ArrowLeft") {
        setaEsquerda = false;
    }
}

function desenharBola() {

// bolaX: É a coordenada X do centro do arco.
// bolaY: É a coordenada Y do centro do arco.
// bolaRadius: É o raio do arco.
// 0: É o ângulo inicial em radianos a partir do qual o arco será desenhado. 
// Neste caso, 0 radianos representa o ângulo inicial no círculo, que é na posição "3 horas" no relógio.
// Math.PI * 2: É o ângulo final em radianos até o qual o arco será desenhado. 
// Neste caso, Math.PI * 2 representa um círculo completo de 360 graus (ou 2π radianos).

    //inicia rederização
    desenho.beginPath();
    desenho.arc(bolaX, bolaY, bolaRadius, 0, Math.PI * 2);
    desenho.fillStyle = "red";
    desenho.fill();
    desenho.closePath();
}

function desenharRebatedor() {
    desenho.beginPath();
    desenho.rect(rebatedorX, canvas.height - rebatedorAltura, rebatedorLargura, rebatedorAltura);
    desenho.fillStyle = "blue";
    desenho.fill();
    desenho.closePath();
}

function desenharTijolos() {
    //percorre colunas
    for (var coluna = 0; coluna < tijolosPorColuna; coluna++) {
        //percorre linhas
        for (var linha = 0; linha < tijolosPorLinha; linha++) {
            //redesenharTijolosesenha tijolos
            if (tijolos[coluna][linha].ativo === 1) {
                var brickX = (coluna * (tijoloLargura + tijoloEspaçamento)) + EspaçamentoEsquerdoQuadro;
                var brickY = (linha * (tijoloAltura + tijoloEspaçamento)) + EspaçamentoSuperiorQuadro;
                tijolos[coluna][linha].x = brickX; //define o x, do tijolo naquela linha e coluna
                tijolos[coluna][linha].y = brickY; //define o y, do tijolo naquela linha e coluna
                desenho.beginPath();
                desenho.rect(brickX, brickY, tijoloLargura, tijoloAltura); //redesenha nas posições certas
                desenho.fillStyle = "green";
                desenho.fill();
                desenho.closePath();
            }
        }
    }
}
 
function detectarColisao() {
   
    for (var coluna = 0; coluna < tijolosPorColuna; coluna++) {
        for (var linha = 0; linha < tijolosPorLinha; linha++) {

            var tijolo = tijolos[coluna][linha];
            if (tijolo.ativo === 1) {

                // Verifica se a posição horizontal da (bolaX) é maior do que a posição horizontal do (tijolo.x). 
                //Isso significa que a bola está à direita do tijolo.
                if (bolaX > tijolo.x &&
                //Verifica se a posição horizontal da bola (bolaX) é menor do que a soma da posição horizontal do tijolo
                // e a largura do tijolo (tijolo.x + tijoloLargura). 
                //Isso significa que a bola está à esquerda do tijolo.  
                 bolaX < tijolo.x + tijoloLargura && 
                 //Verifica se a posição vertical da bola (bolaY) é maior do que a posição vertical do tijolo (tijolo.y).
                  //Isso significa que a bola está abaixo do tijolo.
                  bolaY > tijolo.y &&
                  //Verifica se a posição vertical da bola (bolaY) é menor do que a soma da posição vertical do tijolo
                  // e a altura do tijolo (tijolo.y + tijoloAltura). 
                  //Isso significa que a bola está acima do tijolo.
                   bolaY < tijolo.y + tijoloAltura) {

                    //direção da bola inversa se bater no tijolo
                    bolaDY = -bolaDY;
                    tijolo.ativo = 0;

                        // Cria o contexto de áudio
const audioContext = new (window.AudioContext)();

// Faz uma requisição para carregar o arquivo de som
const request = new XMLHttpRequest();
request.open('GET', 'sai.mp3', true);
request.responseType = 'arraybuffer';

request.onload = function() {
  // Decodifica o arquivo de som
  audioContext.decodeAudioData(request.response, function(buffer) {
    // Cria um nó de áudio para reproduzir o som
    const source = audioContext.createBufferSource();
    source.buffer = buffer;
    
    // Conecta o nó de áudio ao destino de saída (alto-falantes)
    source.connect(audioContext.destination);
    
    // Reproduz o som
    source.start(0);
  }, function(error) {
    console.error('Erro ao decodificar o arquivo de som', error);
  });
};

request.send();

                }
            }
        }
    }
}

function draw() {
    desenho.clearRect(0, 0, canvas.width, canvas.height);
    desenharTijolos();
    desenharBola();
    desenharRebatedor();
    detectarColisao();
    
    //Verifica se a posição horizontal futura da bola (bolaX + bolaDX) é maior do que a largura total do canvas menos o raio da bola
    // (canvas.width - bolaRadius). Isso significa que a bola está prestes a ultrapassar o limite direito do canvas.
    if (bolaX + bolaDX > canvas.width - bolaRadius ||
    //Verifica se a posição horizontal futura da bola (bolaX + bolaDX) é menor do que o raio da bola (bolaRadius).
    // Isso significa que a bola está prestes a ultrapassar o limite esquerdo do canvas.
     bolaX + bolaDX < bolaRadius) {
        // Inverte a direção horizontal da bola, multiplicando sua velocidade horizontal (bolaDX) por -1.
        //  Essa inversão faz com que a bola "quique" nas bordas laterais do canvas e continue se movendo na direção oposta.
        bolaDX = -bolaDX;
    }

    // Verifica se a posição vertical futura da bola (bolaY + bolaDY) é menor do que o raio da bola (bolaRadius).
    //  Isso significa que a bola está prestes a ultrapassar o limite superior do canvas.
    if (bolaY + bolaDY < bolaRadius) {
        bolaDY = -bolaDY; //quica inverso

        // verifica se a posição vertical futura da bola (bolaY + bolaDY) é maior do que a diferença entre 
        //a altura total do canvas e o raio da bola (canvas.height - bolaRadius). 
        //Isso significa que a bola está prestes a ultrapassar o limite inferior do canvas.
    } else if (bolaY + bolaDY > canvas.height - bolaRadius) {

        //Se essa condição for verdadeira, o código verifica se a bola está colidindo com o rebatedor.
        // Isso é verificado através das posições horizontal (bolaX) do rebatedor (rebatedorX) e sua largura (rebatedorLargura).
        if (bolaX > rebatedorX && bolaX < rebatedorX + rebatedorLargura) {
            bolaDY = -bolaDY; //rebate pra cima
        } else {
            // Game over
            document.location.reload();
        }
    }
    //Essas linhas verificam se as teclas de seta direita (setaDireita) ou esquerda (setaEsquerda) estão pressionadas
    // e se o rebatedor não ultrapassou os limites laterais do canvas.
    if (setaDireita && rebatedorX < canvas.width - rebatedorLargura) {
        // posição horizontal do rebatedor (rebatedorX) é incrementada em 7. Isso move o rebatedor para a direita.
        rebatedorX += 7;

        //Caso contrário, se a tecla de seta esquerda está pressionada (setaEsquerda)
        // e o rebatedor ainda não alcançou o limite esquerdo do canvas (rebatedorX > 0),
        //  a posição horizontal do rebatedor (rebatedorX) é decrementada em 7.
        //   Isso move o rebatedor para a esquerda.
    } else if (setaEsquerda && rebatedorX > 0) {
        rebatedorX -= 7;
    }
    
    //Essas linhas atualizam as posições horizontal (bolaX) e vertical (bolaY) da bola adicionando
    // as suas velocidades horizontais (bolaDX) e verticais (bolaDY), respectivamente. 
    // Essa atualização faz com que a bola se mova em cada quadro de animação.
    bolaX += bolaDX;
    bolaY += bolaDY;
    
    //função é usada para solicitar que o navegador chame uma função de retorno de animação antes do próximo repintar da tela.
    // Isso permite a criação de animações suaves e eficientes, garantindo que a função draw seja chamada repetidamente para 
    // atualizar os elementos visuais do jogo.

    //Em resumo, essas linhas de código tratam do movimento do rebatedor e da bola, 
    //além de usarem requestAnimationFrame para atualizar a tela de forma suave.
    requestAnimationFrame(draw);
}

draw();



function atualizarVariaveis() {
    var bolaDX = parseInt(document.getElementById("bolaDX").value);
    var bolaDY = parseInt(document.getElementById("bolaDY").value);
    var tijolosPorLinha = parseInt(document.getElementById("tijolosPorLinha").value);
    var tijolosPorColuna = parseInt(document.getElementById("tijolosPorColuna").value);

    // Faça o que desejar com as variáveis atualizadas
    console.log("Novos valores das variáveis:");
    console.log("bolaDX:", bolaDX);
    console.log("bolaDY:", bolaDY);
    console.log("tijolosPorLinha:", tijolosPorLinha);
    console.log("tijolosPorColuna:", tijolosPorColuna);

    localStorage.setItem('bolaDX', JSON.stringify(bolaDX));
    localStorage.setItem('bolaDY', JSON.stringify(bolaDY));
    localStorage.setItem('tijolosPorLinha', JSON.stringify(tijolosPorLinha));
    localStorage.setItem('tijolosPorColuna', JSON.stringify(tijolosPorColuna));
}


function irParaJogo() {
    // Alterar a URL para a nova página HTML
    window.location.href = "jogo.html";
  }



  function desenharExplosao(x, y) {
    desenho.beginPath();
    desenho.arc(x, y, 20, 0, Math.PI * 2);
    desenho.fillStyle = "yellow";
    desenho.fill();
    desenho.closePath();
  }