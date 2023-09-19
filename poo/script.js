//sem orientação a objetos
var nome1 = 'João';
var idade1 = 30;

var nome2 = 'Maria'
var idade2 =40;

function falar(nome, idade){
    alert("Sem Orientação: Olá Meu nome é "+ nome + " e tenho " + idade + " anos");
}
falar(nome1, idade1);
falar(nome2, idade2);

//com orientação a objetos
class Pessoa {
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
    }
    falar(){
        alert("Com Orientação: Olá Meu nome é "+ this.nome + " e tenho " + this.idade + " anos");
    }
}

var pessoa1 = new Pessoa('Daniel', 20);
var pessoa2 = new Pessoa('Tiringa', 60);

pessoa1.falar();
pessoa2.falar();
alert('Olá ' + pessoa2.idade);