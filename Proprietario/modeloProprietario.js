const Sequelize = require('sequelize');
const Endereco = require('../Endereco/modeloEndereco');
const conexao = require('../conexao/conexao');
const Proprietario = conexao.define('proprietario', {
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
    dataNascimento:{
        type: Sequelize.DATE,
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

Proprietario.sync({
    //alter: true
});

module.exports = Proprietario;