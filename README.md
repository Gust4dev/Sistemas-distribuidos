# Sistemas Distribuídos - Backend de Login

Este projeto é um **servidor backend simples em Node.js com Express**, criado como parte dos estudos de **Sistemas Distribuídos**.  
Ele disponibiliza uma rota de autenticação (`/login`) que valida usuário e senha de forma básica.

---

## 🚀 Tecnologias
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [CORS](https://www.npmjs.com/package/cors)

---

## 📦 Pré-requisitos
Antes de começar, você precisa ter instalado:
- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/)

---

## ⚙️ Instalação e execução

1. Acesse a pasta do backend:
   ```bash
   cd backend
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor:
   ```bash
   npm start
   ```

O servidor será iniciado em:  
👉 `http://localhost:4000`

---

## 📌 Endpoints

- **POST `/login`** → Valida credenciais enviadas em JSON:
  ```json
  {
    "username": "aluno",
    "password": "senha"
  }
  ```

---

## 👤 Autor
- Gustavo Gomes dos Santos - 2111267
