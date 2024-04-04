const Sequelize = require('sequelize');
const Cliente = require('../Cliente/modeloCliente');
const Imovel = require('../Imovel/modeloImovel');
const conexao = require('../conexao/conexao');
const Visita = conexao.define('visita', {
    codigo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    dataVisita: {
        type: Sequelize.DATE,
        allowNull: false
    },
    visitaRealizada: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    },
    clienteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Cliente,
            key: 'codigo',
        },
        onDelete: 'CASCADE'
    },
    imovelId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Imovel,
            key: 'codigo',
        },
        onDelete: 'CASCADE'
    }
}, {
    timestamps: false
});

Visita.sync({
    //alter: true
});

module.exports = Visita;