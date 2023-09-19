function buscarCep() {
  const cep = document.getElementById('cep').value;
  const url = `https://viacep.com.br/ws/${cep}/json/`;

  fetch(url) //faz requisição http para recuperar recurso
    // As funções de callback são comumente usadas em JavaScript para trabalhar com 
    // código assíncrono, onde uma operação pode levar algum tempo para ser concluída
    //  e o resultado só é retornado posteriormente. Por exemplo, as chamadas ao método 
    //  fetch() e o uso de eventos do DOM em JavaScript são geralmente tratados com 
    //  funções de callback.
    .then(response => response.json())  //then(response => response.json()) é uma função de callback que pode ser encadeada à chamada do método fetch() para manipular a resposta da requisição HTTP.
    .then(data => {

      if (data.erro) {
        document.getElementById('resultado').textContent = 'CEP não encontrado';

      } else {
        document.getElementById('resultado').innerHTML = `
            <strong>CEP:</strong> ${data.cep}<br>
            <strong>Logradouro:</strong> ${data.logradouro}<br>
            <strong>Bairro:</strong> ${data.bairro}<br>
            <strong>Cidade:</strong> ${data.localidade}<br>
            <strong>Estado:</strong> ${data.uf}
          `;
      }
    })
    .catch(error => console.error(error));
}