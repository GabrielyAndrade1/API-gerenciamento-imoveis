const Sequelize = require('sequelize');
const Imovel = require('../Imovel/modeloImovel');
const conexao = require('../conexao/conexao');
const Fotos = conexao.define('fotos', {
    codigo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    chaveAws: {
        type: Sequelize.CHAR(36),
        allowNull: false
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

Fotos.sync({
    alter: true
});

module.exports = Fotos;