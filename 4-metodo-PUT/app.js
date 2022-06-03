const express = require('express')

const app = express()

app.use(express.json())




app.listen(3000, () => {
    console.log("Servidor iniciado com sucesso na porta 3000: http://localhost:3000")
})



