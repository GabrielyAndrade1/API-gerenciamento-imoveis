const Sequelize = require('sequelize');

const conexao = new Sequelize('gerenciamento_imovel', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

conexao.authenticate().then(() => {
    console.log('Conectado com sucesso.');
}).catch((erro) => {
    console.log('Deu erro: ', erro);
});

module.exports = conexao;