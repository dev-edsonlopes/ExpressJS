const express = require('express');
const res = require('express/lib/response');
const app = express();

app.get('/', (req, res) => {
    res.send('Seja bem-vindo ao meu APP')
})

app.get('/sobre', (req, res) => {
    res.send('Minha página!')
})

app.get('/blog', (req, res) => {
    res.send('Bem-vindo!! essa é minha página pessoal!')
})

app.listen(8080, () => console.log('Servidor ON: url: http://localhost:8080'))
