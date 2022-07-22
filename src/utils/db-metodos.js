import Dicas from "../infra/dicas-db.js";
import dicasController from "../controllers/dicas-controller.js";

class DbMetodos {
  retornoAleatorio() {
    const dicaAleatoria = Dicas[Math.floor(Math.random() * Dicas.length)]
    return dicaAleatoria;
  }

  guardarDica(dica) {
    const dicaGuardada = Dicas.push(dica);
    return Dicas;
  }
}

export default new DbMetodos; 