from flask import Flask, request, jsonify

app = Flask(__name__)

# Lista para armazenar as postagens
postagens = []

@app.route('/postagens', methods=['POST'])
def criar_postagem():
    data = request.get_json()  # Obtém os dados do corpo da requisição
    postagens.append(data)      # Adiciona a postagem à lista
    return jsonify({"message": "Postagem criada com sucesso!"})

@app.route('/postagens', methods=['GET'])
def obter_postagens():
    return jsonify(postagens)

if __name__ == '__main__':
    app.run(debug=True)