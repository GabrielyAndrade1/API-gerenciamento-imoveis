const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
const TipoImovel = conexao.define('tipoImovel', {
    codigo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: Sequelize.STRING(500),
        allowNull: false
    }
}, {
    timestamps: false
});

TipoImovel.sync({
    alter: true
});

module.exports = TipoImovel;