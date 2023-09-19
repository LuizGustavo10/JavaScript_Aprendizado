document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const data = document.getElementById('data').value;
    const resultadoDiv = document.getElementById('resultado');

    const queryParams = `data=${encodeURIComponent(data)}`;
    const url = `resultado.html?${queryParams}`;

    resultadoDiv.innerHTML = `<p>Redirecionando para: ${url}</p>`;
    window.location.href = url;
});

function enviarPOST() {
    const data = document.getElementById('data').value;
    const resultadoDiv = document.getElementById('resultado');

    const formData = new FormData();
    formData.append('data', data);

    fetch('resultado.html', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(text => {
        resultadoDiv.innerHTML = `<p>Resposta POST: ${text}</p>`;
    });
}




