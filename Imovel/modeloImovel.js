const Sequelize = require('sequelize');
const Endereco = require('../Endereco/modeloEndereco');
const TipoImovel = require('../TipoImovel/modeloTipoImovel');
const conexao = require('../conexao/conexao');
const Imovel = conexao.define('imovel', {
    codigo: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: Sequelize.STRING(400),
        allowNull: false
    },
    areaMetros: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    tipoImovelId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: TipoImovel,
            key: 'codigo',
        },
        onDelete: 'CASCADE'
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

Imovel.sync({
    //alter: true
});

module.exports = Imovel;