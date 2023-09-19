document.getElementById('meuFormulario').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const method = document.getElementById('method').value;
    const data = document.getElementById('data').value;

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (method === 'POST') {
        const postResponse = await enviarRequisicao('POST', data);
        resultadoDiv.innerHTML += `<p>Resposta POST: ${JSON.stringify(postResponse)}</p>`;
    } else if (method === 'GET') {
        window.location.href = `/api?method=${method}&data=${data}`;
    }
});

async function enviarRequisicao(method, data) {
    const response = await fetch(`/api?method=${method}&data=${data}`);
    return response.json();
}