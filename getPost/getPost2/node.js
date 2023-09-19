const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const { method, data } = parsedUrl.query;

    let response;

    if (method === 'POST') {
        // Tratamento para requisição POST aqui
        response = { method: 'POST', data: data };
    } else if (method === 'GET') {
        // Tratamento para requisição GET aqui
        response = { method: 'GET', data: data };
    } else {
        response = { error: 'Método não suportado' };
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(response));
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor em execução na porta ${PORT}`);
});