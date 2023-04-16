
const nomes = ['ALESSANDRO', 'ALISON', 'ALLANIS', "ANA CAROLINA", "DANIELA", "EDUARDO", "GEOVANA", "GISLAINE", "GUILHERME", "JOAO LUCAS", "JOÃO RENNAN", "KAIKY", "KAUAN", "KAUANA", "LETICIA", "LORENNA", "LUCAS CORDEIRO", "LUCCAS SCOLARO", "LUIZ GUILHERME", "MARCIO", "MARIA REGIANE", "MATEUS", "ORLANDO", "PÂMELA", "TALIA", "WILSON"];


//math floor arredonda para o numero mais proximo
function gerarBatalha() {
    const nome1Aleatorio = nomes[Math.floor(Math.random() * nomes.length)];
    const nome2Aleatorio = nomes[Math.floor(Math.random() * nomes.length)];

    while (nome1Aleatorio == nome2Aleatorio) {
        gerarBatalha();
    }

    document.getElementById('jogador1').textContent = nome1Aleatorio;
    document.getElementById('jogador2').textContent = nome2Aleatorio;

    //dom -dar futuramente
    var elemento = document.getElementById("botaos");
    elemento.style.backgroundColor = "red";
    elemento.style.fontSize = "15px";
    elemento.style.border = "5px solid black";

}


// Javascript
var jogador = "X";

function jogar(celula) {

    if (celula.innerHTML == "") {
        celula.innerHTML = jogador;

        if (jogador == "X") {
            jogador = "O";
            celula.style.backgroundColor = "red";

        } else {
            jogador = "X";
            celula.style.backgroundColor = "blue";
        }
    }
}

function reiniciar() {
    // elemento.style.backgroundColor = "red";
    window.location.reload();

}



function addToArr() {
    
    // Extrair valores do formulário
    var name = document.getElementById("name").value;
    nomes.push(name);

    showList();
    // Limpar campos do formulário
    // document.getElementById("name").value = "";
    // document.getElementById("email").value = "";
    
  }
  
  function showList() {
    var myList = document.getElementById("myList");
    myList.innerHTML = "";
    
    for (var i = 0; i < nomes.length; i++) {
      var listItem = document.createElement("li");
      var nomee = nomes[i];
      listItem.innerHTML = nomee;
      myList.appendChild(listItem);
    
    
    }
  }
  
  