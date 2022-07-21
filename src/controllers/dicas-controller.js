class DicasController {
  rotas(app) {
    app.get('/',(req, res) => {
      res.send("<h1> Deu certo </h1>")
    })

    app.post('/',(req, res) => {
      res.status(200).json({nome:'nodja'})

    })
  }
}

export default new DicasController;