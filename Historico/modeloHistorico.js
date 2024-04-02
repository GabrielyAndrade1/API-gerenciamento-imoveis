const Sequelize = require('sequelize');
const Cliente = require('../Cliente/modeloCliente');
const Imovel = require('../Imovel/modeloImovel');
const Corretor = require('../Corretor/modeloCorretor');
const conexao = require('../conexao/conexao');
const Historico = conexao.define('historico', {
    codigo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    dataNegociacao: {
        type: Sequelize.DATE,
        allowNull: false
    },
    percentualComissao: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    ClienteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Cliente,
            key: 'codigo',
        },
        onDelete: 'CASCADE'
    },
    ImovelId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Imovel,
            key: 'codigo',
        },
        onDelete: 'CASCADE'
    },
    CorretorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: Corretor,
            key: 'codigo',
        },
        onDelete: 'CASCADE'
    }
}, {
    timestamps: false
});

Historico.sync({
    alter: true
});

module.exports = Historico;