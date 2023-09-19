// Sem orientação a objetos
let nome1 = "Alice";
let idade1 = 30;

let nome2 = "Bob";
let idade2 = 25;

function imprimirPessoa(nome, idade) {
    console.log(`Nome: ${nome}, Idade: ${idade}`);
}

imprimirPessoa(nome1, idade1);
imprimirPessoa(nome2, idade2);

//Classes e Objetos:
class Pessoa {
    constructor(nome, idade) {
      this.nome = nome;
      this.idade = idade;
    }
  
    saudacao() {
      console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
  }
  
  const pessoa1 = new Pessoa('Alice', 30);
  const pessoa2 = new Pessoa('Bob', 25);
  
  pessoa1.saudacao(); // Saída: Olá, meu nome é Alice e tenho 30 anos.
  pessoa2.saudacao(); // Saída: Olá, meu nome é Bob e tenho 25 anos.

  //interface - JavaScript não possui suporte nativo para interfaces, 
  //mas você pode simular interfaces usando um objeto contendo as assinaturas dos métodos
   //que as classes devem implementar.
  const FormaGeometrica = {
    calcularArea() {},
    calcularPerimetro() {},
  };
  
class Retangulo {
    constructor(largura, altura) {
      this.largura = largura;
      this.altura = altura;
    }
  
    calcularArea() {
      return this.largura * this.altura;
    }
  
    calcularPerimetro() {
      return 2 * (this.largura + this.altura);
    }
  }

  //Atributos e Tipos de Dados:
  class Carro {
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
    }
  }
  
  const meuCarro = new Carro('Toyota', 'Corolla', 2020);
  console.log(meuCarro.marca); // Saída: Toyota

  //Modificadores de Acesso:
//  JavaScript não possui modificadores de acesso como
// public, private ou protected nativamente. No entanto, 
// você pode usar convenções para simular o encapsulamento.
class ContaBancaria {
    constructor(saldo) {
      this._saldo = saldo;
    }
  
    get saldo() {
      return this._saldo;
    }
  
    depositar(valor) {
      this._saldo += valor;
    }
  
    sacar(valor) {
      if (valor <= this._saldo) {
        this._saldo -= valor;
      } else {
        console.log('Saldo insuficiente.');
      }
    }
  }
  
  const minhaConta = new ContaBancaria(1000);
  console.log(minhaConta.saldo); // Saída: 1000

  //métodos e propriedades
  class Circulo {
    constructor(raio) {
      this.raio = raio;
    }
  
    calcularArea() {
      return Math.PI * this.raio ** 2;
    }
  }
  
  const circulo = new Circulo(5);
  console.log(circulo.calcularArea()); // Saída: 78.53981633974483

  //Encapsulamento e Agregação:

  class Pessoa {
    constructor(nome) {
      this.nome = nome;
      this.endereco = null; // Agregação (outro objeto)
    }
  
    setEndereco(endereco) {
      this.endereco = endereco;
    }
  }
  
  class Endereco {
    constructor(cidade, estado) {
      this.cidade = cidade;
      this.estado = estado;
    }
  }
  
  const pessoa = new Pessoa('Alice');
  const endereco = new Endereco('São Paulo', 'SP');
  pessoa.setEndereco(endereco);
  console.log(pessoa.endereco.cidade); // Saída: São Paulo

//Herança e polimorfismo:
class Animal {
  constructor(nome) {
    this.nome = nome;
  }

  fazerBarulho() {
    console.log('Fazendo barulho genérico.');
  }
  
}

class Cachorro extends Animal {
  constructor(nome, raca) {
    super(nome);
    this.raca = raca;
  }

  fazerBarulho() {
    console.log('Au au!');
  }
}

const cachorro = new Cachorro('Rex', 'Golden Retriever');
console.log(cachorro.nome); // Saída: Rex
console.log(cachorro.raca); // Saída: Golden Retriever
cachorro.fazerBarulho(); // Saída: Au au!

  //tratamento de excessões
  class Calculadora {
    dividir(a, b) {
      if (b === 0) {
        throw new Error('Não é possível dividir por zero.');
      }
      return a / b;
    }
  }
  
  const calculadora = new Calculadora();
  try {
    const resultado = calculadora.dividir(10, 0);
    console.log(resultado);
  } catch (error) {
    console.log(error.message); // Saída: Não é possível dividir por zero.
  }

  


