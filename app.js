import express from "express";

const porta = 3000;
const app = express();

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`)
})

app.use(express.json());
