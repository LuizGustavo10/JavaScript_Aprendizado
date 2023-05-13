function getHotels(city) {
    var apiKey = "SUA_CHAVE_DE_API_DO_SKYSCANNER";
    var apiUrl = `https://partners.api.skyscanner.net/apiservices/hotels/liveprices/v3/BR/BRL/pt-BR/${city}/anytime/anytime`;
  
    fetch(apiUrl, {
      headers: {
        "X-Api-Key": apiKey,
      }
    })
      .then(response => response.json())
      .then(data => {
        // Exiba as informações dos hotéis na sua aplicação
        console.log(data);
      })
      .catch(error => {
        console.log("Erro na busca das informações dos hotéis:", error);
      });
  }
  
  // Exemplo de uso
  getHotels("Rio de Janeiro");