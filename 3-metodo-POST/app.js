const express = require('express')

const app = express()

app.use(express.json())

app.get("/contatos/:id", (req, res) => {
  const {id} = req.params; //Parâmetro
  const {sit} = req.query;  //Variável
  return res.json({
    id, 
    nome: "Nalberth", 
    email: "nalberthcastro1510@gmail.com",
    sit
  })
})

app.post("/contato", (req, res)=>{
  var nome = req.body.nome
  var email = req.body.email
  return res.json({
    nome, 
    email
  })
})


app.listen(3000, () => {
    console.log("Servidor iniciado com sucesso na porta 3000: http://localhost:3000")
})



