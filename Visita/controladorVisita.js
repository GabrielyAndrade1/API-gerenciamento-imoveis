const express = require('express');
const Visita = require('./modeloVisita');

const router = express.Router();

//Rota para pesquisar todos os cadastros
router.get('/visita', async (requisicao, resposta) => {
    const visita = await Visita.findAll(  );
    resposta.send(visita);
});

//Rota para pesquisar pelo ID
router.get('/visita/:visitaId', async (requisicao, resposta) => {
    const codigoVisita = requisicao.params.visitaId;
    resposta.json(await Visita.findByPk(codigoVisita));
});

//Rota para cadastro
router.post('/visita', (requisicao, resposta) => {
    const dataVisita = requisicao.body.dataVisita;
    const visitaRealizada = requisicao.body.visitaRealizada;
    const codigoCliente = requisicao.body.clienteId;
    const codigoImovel = requisicao.body.imovelId;
    Visita.create({
        dataVisita: dataVisita,
        visitaRealizada : visitaRealizada,
        ClienteId: codigoCliente,
        ImovelId: codigoImovel
    }).then(() => {
        resposta.send('Cadastrado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

//Rota para alteração
router.put('/visita/:visitaId', (requisicao, resposta) => {
    const codigoVisita = requisicao.params.visitaId;
    const dataVisita = requisicao.body.dataVisita;
    const visitaRealizada = requisicao.body.visitaRealizada;
    const codigoCliente = requisicao.body.ClienteId;
    const codigoImovel = requisicao.body.ImovelId;
    Imovel.update({
        dataVisita: dataVisita,
        visitaRealizada: visitaRealizada,
        ClienteId: codigoCliente,
        ImovelId: codigoImovel
    }, {
        where: {
            codigo: codigoVisita
        }
    }).then(() => {
        resposta.send('Atualizado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

//Rota para apagar
router.delete('/visita/:visitaId', (requisicao, resposta) => {
    const codigoVisita = requisicao.params.visitaId;
    Visita.destroy({ where: { codigo: codigoVisita } }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});


module.exports = router;