const express = require('express');
const TipoImovel = require('./modeloTipoImovel');

const router = express.Router();

//Rota para pesquisar todos os cadastros
router.get('/tipoImovel', async (requisicao, resposta) => {
    const tipoImovel = await TipoImovel.findAll(  );
    resposta.send(tipoImovel);
});

//Rota para pesquisar pelo ID
router.get('/tipoImovel/:tipoImovelId', async (requisicao, resposta) => {
    const codigoTipoImovel = requisicao.params.tipoImovelId;
    resposta.json(await TipoImovel.findByPk(codigoTipoImovel));
});

//Rota para cadastro
router.post('/tipoImovel', (requisicao, resposta) => {
    const descricao = requisicao.body.descricao;
    TipoImovel.create({
        descricao: descricao
    }).then(() => {
        resposta.send('Cadastrado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

//Rota para alteração
router.put('/tipoImovel/:tipoImovelId', (requisicao, resposta) => {
    const codigoTipoImovel = requisicao.params.tipoImovelId;
    const descricao = requisicao.body.descricao;
    Imovel.update({
        descricao: descricao
    }, {
        where: {
            codigo: codigoTipoImovel
        }
    }).then(() => {
        resposta.send('Atualizado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

//Rota para apagar
router.delete('/tipoImovel/:tipoImovelId', (requisicao, resposta) => {
    const codigoTipoImovel = requisicao.params.tipoImovelId;
    TipoImovel.destroy({ where: { codigo: codigoTipoImovel } }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});


module.exports = router;