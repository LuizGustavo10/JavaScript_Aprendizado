function search() {
    var searchInput = document.getElementById("searchInput").value.toLowerCase();

    // Realize uma chamada a uma API de Pokémon, como a PokeAPI (https://pokeapi.co/), para buscar as informações do Pokémon
    var apiUrl = `https://pokeapi.co/api/v2/pokemon/${searchInput}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            
            // Manipule os dados recebidos para exibir as informações do Pokémon
            var pokemonInfo = document.getElementById("pokemonInfo");
            pokemonInfo.innerHTML = `
                <h2>${data.name.toUpperCase()}</h2>
                <img class="imgPoke" src="${data.sprites.front_default}" alt="${data.name}">
                <p>ID: ${data.id}</p>
                <p>Tipo: ${data.types.map(type => type.type.name).join(", ")}</p>
                <p>Habilidades: ${data.abilities.map(ability => ability.ability.name).join(", ")}</p>
            `;
        })
        .catch(error => {
            console.log("Erro na busca do Pokémon:", error);
        });
}