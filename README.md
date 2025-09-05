# SD_C1 - Trabalho Prático Ciclo 01

## Integrantes
- Nome1 Sobrenome1
- Nome2 Sobrenome2

> Substitua pelos nomes reais antes de enviar.

## Tecnologias utilizadas
- Frontend: HTML + JavaScript (vanilla)
- Backend: Node.js 18+ + Express 4.18
- Dependências: express@4.18.2, cors@2.8.5

## Estrutura do projeto
```
SD_C1_Dupla_Nome1_Nome2.zip
├─ README.md
├─ frontend/
│  └─ index.html
└─ backend/
   ├─ package.json
   └─ index.js
```

## Instruções para executar (professor)
1. **Requisitos:** Node.js 18+ e npm instalados.
2. Abra um terminal e rode o backend:
```bash
cd backend
npm install
npm start
# (opcional para desenvolvimento: npm run dev se quiser usar nodemon)
```
O backend inicia em `http://localhost:4000`.

3. Abra `frontend/index.html` no navegador (duplo clique ou `Open File`).  
   - O frontend envia POST para `http://localhost:4000/login`.

## Credenciais para teste (padrão)
- **Usuário:** `aluno`
- **Senha:** `senha123`

## Endpoints
- `POST /login`  
  - Body JSON: `{ "username": "...", "password": "..." }`  
  - Respostas:
    - `200 OK` — `{ message: "Login bem-sucedido" }`
    - `401 Unauthorized` — `{ error: "Credenciais inválidas" }`
    - `400 Bad Request` — `{ error: "Requisição inválida..." }`

## Como testar com curl (exemplos)
1. Sucesso:
```bash
curl -i -X POST http://localhost:4000/login       -H "Content-Type: application/json"       -d '{"username":"aluno","password":"senha123"}'
```
2. Credenciais inválidas:
```bash
curl -i -X POST http://localhost:4000/login       -H "Content-Type: application/json"       -d '{"username":"aluno","password":"errada"}'
```
3. Requisição inválida (campo faltando):
```bash
curl -i -X POST http://localhost:4000/login       -H "Content-Type: application/json"       -d '{"username":""}'
```

## Observações
- Não há uso de banco de dados conforme especificação.
- Se desejar TypeScript/React para portfólio, podemos evoluir após a entrega.
