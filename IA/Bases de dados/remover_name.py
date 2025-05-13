import pandas as pd

# Carrega a base final classificada
df = pd.read_csv("base_classificada_nova.csv")

# Seleciona somente colunas que serão usadas como input + label
df_sem_nome = df[['Pos', 'PPG', 'APG', 'RPG', 'Label']]

# Salva a versão sem nome
df_sem_nome.to_csv("base_sem_nome.csv", index=False)

