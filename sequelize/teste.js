const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste','root', '123456', {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function() {
    console.log("Conectado com Sucesso")
}).catch(function (erro) {
    console.log("Falha na conexão: "+ erro)
})