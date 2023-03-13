const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste','root', '123456', {
    host: "localhost",
    dialect: "mysql"
})

// sequelize.authenticate().then(function() {
//     console.log("Conectado com Sucesso")
// }).catch(function (erro) {
//     console.log("Falha na conexão: "+ erro)
// })

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },

    conteudo: {
        type: Sequelize.TEXT
    }
})
// Postagem.sync({force:true})
// Postagem.create({
//     titulo: "UM TITULO QUALQUER",
//     conteudo: "Mundo da programação é algo muito legal, é uma area muito ampla, quem se esforça para entender isso, o céu é o limite."
// })

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})
// Usuario.sync({force:true})
// Usuario.create({
//     nome: 'Edson',
//     sobrenome: 'Lopes',
//     idade: 22,
//     email: 'dev_edson@outlook.com'
// })

