const express = require('express')

const app = express()

app.use(express.json())


app.post("/contato", (req, res)=>{
  var nome = req.body.nome
  var {email} = req.body
  //Implementar a regra para salvar no banc de dados 
  return res.json({
    nome, 
    email
  })
})


app.listen(3000, () => {
    console.log("Servidor iniciado com sucesso na porta 3000: http://localhost:3000")
})



