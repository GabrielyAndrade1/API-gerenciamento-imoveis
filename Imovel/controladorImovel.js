const express = require('express');
const Imovel = require('./modeloImovel');

const router = express.Router();

//Rota para pesquisar todos os cadastros
router.get('/imovel', async (requisicao, resposta) => {
    const imovel = await Imovel.findAll(  );
    resposta.send(imovel);
});

//Rota para pesquisar pelo ID
router.get('/imovel/:imovelId', async (requisicao, resposta) => {
    const codigoImovel = requisicao.params.imovelId;
    resposta.json(await Imovel.findByPk(codigoImovel));
});

//Rota para cadastro
router.post('/imovel', (requisicao, resposta) => {
    const descricao = requisicao.body.descricao;
    const areaMetros = requisicao.body.areaMetros;
    const codigoTipoImovel = requisicao.body.tipoImovelId;
    const codigoEndereco = requisicao.body.enderecoId;
    Imovel.create({
        descricao: descricao,
        areaMetros: areaMetros,
        tipoImovelId: codigoTipoImovel,
        enderecoId: codigoEndereco
    }).then(() => {
        resposta.send('Cadastrado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

//Rota para alteração
router.put('/imovel/:imovelId', (requisicao, resposta) => {
    const codigoImovel = requisicao.params.ImovelId;
    const descricao = requisicao.body.descricao;
    const areaMetros = requisicao.body.areaMetros;
    const codigoTipoImovel = requisicao.body.tipoImovelId;
    const codigoEndereco = requisicao.body.enderecoId;
    Imovel.create({
        descricao: descricao,
        areaMetros: areaMetros,
        tipoImovelId: codigoTipoImovel,
        enderecoId: codigoEndereco
    }, {
        where: {
            codigo: codigoImovel
        }
    }).then(() => {
        resposta.send('Atualizado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

//Rota para apagar
router.delete('/imovel/:imovelId', (requisicao, resposta) => {
    const codigoImovel = requisicao.params.imovelId;
    Imovel.destroy({ where: { codigo: codigoImovel } }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});


module.exports = router;