import express from "express";
import DicasController from "./src/controllers/dicas-controller.js"

const porta = 3000;
const app = express();

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`)
})

app.use(express.json());

DicasController.rotas(app);
