document.getElementById('meuFormulario').addEventListener('submit', async function(event) {
    event.preventDefault();
    
    const userId = document.getElementById('userId').value;
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    const method = document.getElementById('meuFormulario').getAttribute('method').toUpperCase();

    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = '';

    if (method === 'POST') {
        const postData = { userId, title, body };
        enviarPOST('https://jsonplaceholder.typicode.com/posts', postData)
            .then(response => {
                resultadoDiv.innerHTML += `<p>Resposta POST: ${JSON.stringify(response)}</p>`;
            })
            .catch(error => {
                console.error('Erro ao enviar POST:', error);
            });
    } else if (method === 'GET') {
        enviarGET('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                resultadoDiv.innerHTML += `<p>Resposta GET: ${JSON.stringify(response)}</p>`;
            })
            .catch(error => {
                console.error('Erro ao enviar GET:', error);
            });
    }
});

async function enviarPOST(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    return response.json();
}

async function enviarGET(url) {
    const response = await fetch(url);
    return response.json();
}