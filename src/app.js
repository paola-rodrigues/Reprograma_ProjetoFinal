require('dotenv-safe').config();
const express = require('express');
const cors =require('cors');
const db =require('./database/mongoConfig')
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send({
        title: "Reprograma -> Projeto Final",
        version: "1.0.0",
        mensagem: "Olá, astronauta do outro lado do mundo, aqui você encontra a primeira versão deste projeto, uma API focada em cadastro de pessoas que precisam fazer o descarte adequado do mateial eletrico"
    })

});
db.connect();

module.exports = app;
