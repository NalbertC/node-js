const express = require('express')

const app = express()

app.use(express.json())

app.get("/contatos/:id", (req, res) => {
    const {id} = req.params; //Parâmetro
    const {sit} = req.query; //Variável
    return res.json({
        id,
        nome: "Nalberth",
        email: "nalberthcastro1510@gmail.com",
        sit
    })
})

app.post("/contato", (req, res) => {
    var nome = req.body.nome
    var {email} = req.body
    //Implementar a regra para salvar no banc de dados 
    return res.json({
        nome,
        email
    })
})

app.put("/contato/:id", (req, res)=>{
    const {id} = req.params
    const { _id, nome, email} = req.body

    return res.json({
        id,
        _id,
        nome,
        email
    })
})

app.delete("/contato/:id", (req, res)=>{
    const { id } = req.params

    return res.json({
        id
    })
})

app.listen(3000, () => {
    console.log("Servidor iniciado com sucesso na porta 3000: http://localhost:3000")
})