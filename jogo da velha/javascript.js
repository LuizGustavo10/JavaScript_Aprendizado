
const nomes = ['ALESSANDRO','ALISON','ALLANIS',"ANA CAROLINA","DANIELA","EDUARDO","GEOVANA","GISLAINE","GUILHERME","JOAO LUCAS","JOÃO RENNAN","KAIKY","KAUAN","KAUANA","LETICIA","LORENNA","LUCAS CORDEIRO","LUCCAS SCOLARO","LUIZ GUILHERME","MARCIO","MARIA REGIANE","MATEUS","ORLANDO","PÂMELA","TALIA","WILSON"];


//math floor arredonda para o numero mais proximo
function gerarBatalha() {
    const nome1Aleatorio = nomes[Math.floor(Math.random() * nomes.length)];
    const nome2Aleatorio = nomes[Math.floor(Math.random() * nomes.length)];

    while(nome1Aleatorio == nome2Aleatorio){
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
        } else {
            jogador = "X";
        }
        }
    }

    function reiniciar(){
        // elemento.style.backgroundColor = "red";
       window.location.reload();
 
    }

