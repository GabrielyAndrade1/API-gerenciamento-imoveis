const express = require('express');
const Fotos = require('./modeloFotos');

const router = express.Router();

//Rota para pesquisar todos os cadastros
router.get('/fotos', async (requisicao, resposta) => {
    const fotos = await Fotos.findAll(  );
    resposta.send(fotos);
});

//Rota para pesquisar pelo ID
router.get('/fotos/:fotosId', async (requisicao, resposta) => {
    const codigoFotos = requisicao.params.fotosId;
    resposta.json(await Fotos.findByPk(codigoFotos));
});

//Rota para cadastro
router.post('/fotos', (requisicao, resposta) => {
    const chaveAws = requisicao.body.chaveAws;
    const codigoImovel = requisicao.body.ImovelId;
    Historico.create({
        chaveAws: chaveAws,
        ImovelId: codigoImovel
    }).then(() => {
        resposta.send('Cadastrado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

//Rota para alteração
router.put('/fotos/:fotosId', (requisicao, resposta) => {
    const codigoFotos = requisicao.params.fotosId;
    const chaveAws = requisicao.body.chaveAws;
    const codigoImovel = requisicao.body.ImovelId;
    Historico.update({
        chaveAws: chaveAws,
        ImovelId: codigoImovel
    }, {
        where: {
            codigo: codigoFotos
        }
    }).then(() => {
        resposta.send('Atualizado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

//Rota para apagar
router.delete('/fotos/:fotosId', (requisicao, resposta) => {
    const codigoHistorico = requisicao.params.fotosId;
    Fotos.destroy({ where: { codigo: codigoFotos } }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});


module.exports = router;