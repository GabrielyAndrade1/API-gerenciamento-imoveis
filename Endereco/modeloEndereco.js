const Sequelize = require('sequelize');
const conexao = require('../conexao/conexao');
const Endereco = conexao.define('endereco', {
    codigo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    estado: {
        type: Sequelize.STRING(2),
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING(65),
        allowNull: false
    },
    bairro: {
        type: Sequelize.STRING(70),
        allowNull: false
    },
    rua: {
        type: Sequelize.STRING(70),
        allowNull: false
    },
    complemento: {
        type: Sequelize.STRING(50),
        allowNull: false
    },
    CEP: {
        type: Sequelize.CHAR(8),
        allowNull: false,
        unique:true
    },
}, {
    timestamps: false
});

Endereco.sync({
    alter: true
});

module.exports = Endereco;