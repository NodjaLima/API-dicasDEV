import DicasModels from "../models/dicas-models.js"
import ValidaDicas from "../service/validacoes-service.js"
import DbMetodos from "../utils/db-metodos.js"

class DicasController {
  rotas(app) {
    app.get('/', (req, resp) => {
      const response = DbMetodos.retornoAleatorio()
      resp.status(200).json(response)
    })

    app.post('/', (req, resp) => {
      const dicaValida = ValidaDicas.validaDica(req.body.dica);
      const autorValido = ValidaDicas.validaAutor(req.body.autor);

      if ((dicaValida) && (autorValido)) {
        const novaDica = req.body
        const response = DbMetodos.guardarDica(novaDica)
        resp.status(200).json(response)
      } else {
        resp.status(200).json(Error)
      }
            
      
    })
  }
}

export default new DicasController;