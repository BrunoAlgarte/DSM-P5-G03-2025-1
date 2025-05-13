from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import pandas as pd  # <-- adicionado aqui

# Carregar o modelo treinado
modelo = joblib.load("modelo_classificador_nba.joblib")

app = FastAPI()

# Modelo de entrada
class JogadorInput(BaseModel):
    Pos: str
    PPG: float
    APG: float
    RPG: float

# Mensagens personalizadas por classe
mensagens = {
    "Superstar": "Parabéns! Você é um Superstar — tipo o LeBron ou o Curry! 🏆🔥",
    "All-Star": "Muito bom! Você é um All-Star — consistente e respeitado na liga. ⭐",
    "Role Player": "Você é um Role Player — essencial pro time, sempre contribuindo. 💪",
    "Reserva": "Você é um reserva — mas toda estrela começa do banco. Siga treinando! 🛋️"
}

@app.post("/classificar")
def classificar_jogador(jogador: JogadorInput):
    entrada = pd.DataFrame([{
        "Pos": jogador.Pos,
        "PPG": jogador.PPG,
        "APG": jogador.APG,
        "RPG": jogador.RPG
    }])
    
    predicao = modelo.predict(entrada)[0]
    return {
        "classificacao": predicao,
        "mensagem": mensagens.get(predicao, "Classificação desconhecida.")
    }
