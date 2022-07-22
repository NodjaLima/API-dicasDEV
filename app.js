import express from "express";
import dotenv from "dotenv";
import DicasController from './src/controllers/dicasControllers.js'

dotenv.config();
const porta = 3000;
const app = express();

app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`)
});

app.use(express.json());

DicasController.rotas(app);