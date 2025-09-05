// index.js - Backend simples para /login
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

const VALID_USER = { username: "aluno", password: "senha" };

// Middlewares
app.use(cors()); // permite frontend local acessar
app.use(express.json()); // parse application/json

// POST /login
app.post("/login", (req, res) => {
  try {
    // Validação básica do corpo
    if (!req.is("application/json")) {
      return res
        .status(400)
        .json({ error: "Content-Type deve ser application/json" });
    }

    const { username, password } = req.body ?? {};

    // 400 Bad Request se campos faltando
    if (
      typeof username !== "string" ||
      typeof password !== "string" ||
      username.trim() === "" ||
      password.trim() === ""
    ) {
      return res
        .status(400)
        .json({
          error:
            "Requisição inválida: username e password são obrigatórios (strings não vazias)",
        });
    }

    // Validação das credenciais
    if (username === VALID_USER.username && password === VALID_USER.password) {
      // sucesso (200). Retornamos um payload simples (sem JWT pois não é pedido)
      return res.status(200).json({ message: "Login bem-sucedido" });
    } else {
      // 401 Unauthorized
      return res.status(401).json({ error: "Credenciais inválidas" });
    }
  } catch (err) {
    console.error("Erro no /login:", err);
    return res.status(500).json({ error: "Erro interno do servidor" });
  }
});

// Rota para garantir que backend está online
app.get("/", (req, res) => res.json({ status: "ok" }));

app.listen(PORT, () => {
  console.log(`Backend rodando em http://localhost:${PORT}`);
});
