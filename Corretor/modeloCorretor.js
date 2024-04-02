const Sequelize = require('sequelize');
const Endereco = require('../Endereco/modeloEndereco');
const conexao = require('../conexao/conexao');
const Corretor = conexao.define('corretor', {
    codigo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    cpf: {
        type: Sequelize.CHAR(11),
        allowNull: false
    },
    cnpj: {
        type: Sequelize.CHAR(14),
        allowNull: false
    },
    enderecoId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Endereco,
            key: 'codigo',
        },
        onDelete: 'CASCADE'
    }
}, {
    timestamps: false
});

Corretor.sync({
    alter: true
});

module.exports = Corretor;