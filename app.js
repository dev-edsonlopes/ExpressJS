const express = require('express') 
const app = express()

app.get('/', (req, res) => {
    res.send('HELLO!')
})
app.get('/:nome/:cargo', (req, res) => {
    res.send('<h1> - Hello my name is '+req.params.nome+' and I am a '+req.params.cargo+'</h1>')
})


app.listen(8080, () => console.log('server connect OK'))