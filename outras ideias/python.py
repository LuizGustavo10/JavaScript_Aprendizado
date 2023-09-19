import numpy as np
from sklearn.neural_network import MLPClassifier
import pyautogui
import time

# Capturar a região de interesse na tela para obter informações do jogo
game_region = (400, 400, 700, 500)

# Inicializar o classificador MLP (Multilayer Perceptron)
clf = MLPClassifier(hidden_layer_sizes=(50, 50))

# Função para capturar as informações do jogo
def get_game_data():
    screen = pyautogui.screenshot(region=game_region)
    game_data = np.array(screen.convert('L'))
    return game_data.flatten()

# Função para realizar uma ação com base na previsão do modelo
def perform_action(action):
    if action == 0:
        pyautogui.keyDown('up')
        time.sleep(0.1)
        pyautogui.keyUp('up')

# Capturar dados do jogo para treinamento
n_samples = 1000
X_train = []
y_train = []

for _ in range(n_samples):
    game_data = get_game_data()
    X_train.append(game_data)
    time.sleep(0.05)  # Aguardar um curto período de tempo entre as capturas
    action = int(input("Digite 0 para pular ou 1 para não pular: "))  # Rotular manualmente as ações
    y_train.append(action)

# Treinar o modelo
clf.fit(X_train, y_train)

# Executar o jogo
while True:
    game_data = get_game_data()
    action = clf.predict([game_data])[0]
    perform_action(action)
    time.sleep(0.01)