const express = require('express');

const app = express();

app.get("/", (req, res) => {
  res.send("Nalberth");
});

/*app.get("/contatos", (req, res) => {
  return res.json({
    "Nome:" : "Nalberth",
    "e-mail": "nalberthcastro1510@gmail.com"
  });
});*/

// app.get("/contatos/:id", (req, res) => {
//   const id = req.params.id;
//   return res.json({
//     id : id,
//     Nome: "Nalberth",
//     email: "nalberthcastro1510@gmail.com"
//   });
// });

app.get("/contatos/:id", (req, res) => {
  const {id} = req.params; //Parâmetro
  const {sit} = req.query;  //Variável
  return res.json({
    id, 
    Nome: "Nalberth", 
    email: "nalberthcastro1510@gmail.com",
    sit
  });
});

app.listen(3000, () => {
    console.log("Servidor iniciado com sucesso na porta 3000: http://localhost:3000");
} );

