const express = require('express')

const app = express()

app.use(express.json())

// O middlewares é acessado antes de qualquer função
// Middlewares global ultilizando app
// app.use((req, res, next)=>{
//     console.log("Acessou o Middlewares!")
//     next()
// })

// Acessar antes de uma terminada funcão
// Rota necessária
function valContato(req, res, next){
    if(!req.body.email){
        console.log("Acessou o Middlewares de validação!")
        return res.json({
            erro: true,
            mensagem: "Necessário enviar o e-mail!"
        })
    }
    return next()
}

app.get("/", (req, res) =>{
    console.log("Acessou a rota listar!")
    res.send("Nalberth!")
})

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

app.post("/contato", valContato, (req, res) => {
    console.log("Acessou a rota cadastrar!")
    var nome = req.body.nome
    var {email} = req.body
    //Implementar a regra para salvar no banc de dados 
    return res.json({
        nome,
        email
    })
})

app.put("/contato/:id", valContato,(req, res)=>{
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