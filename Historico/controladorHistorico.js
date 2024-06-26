const express = require('express');
const Historico = require('./modeloHistorico');

const router = express.Router();

//Rota para pesquisar todos os cadastros
router.get('/historico', async (requisicao, resposta) => {
    const historico = await Historico.findAll(  );
    resposta.send(historico);
});

//Rota para pesquisar pelo ID
router.get('/historico/:historicoId', async (requisicao, resposta) => {
    const codigoHistorico = requisicao.params.historicoId;
    resposta.json(await Historico.findByPk(codigoHistorico));
});

//Rota para cadastro
router.post('/historico', (requisicao, resposta) => {
    const dataNegociacao = requisicao.body.dataNegociacao;

    const [dia, mes, ano] = dataNegociacao.split('/');
    const formataNegociacao = new Date(ano, parseInt(mes) - 1, dia);

    const percentualComissao = requisicao.body.percentualComissao;
    const codigoImovel = requisicao.body.imovelId;
    const codigoCliente = requisicao.body.clienteId;
    const codigoCorretor = requisicao.body.corretorId;
    Historico.create({
        dataNegociacao: formataNegociacao,
        percentualComissao: percentualComissao,
        imovelId: codigoImovel,
        clienteId : codigoCliente,
        corretorId : codigoCorretor
    }).then(() => {
        resposta.send('Cadastrado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

//Rota para alteração
router.put('/historico/:historicoId', (requisicao, resposta) => {
    const codigoHistorico = requisicao.params.historicoId;
    const dataNegociacao = requisicao.body.dataNegociacao;

    const [dia, mes, ano] = dataNegociacao.split('/');
    const formataNegociacao = new Date(ano, parseInt(mes) - 1, dia);

    const percentualComissao = requisicao.body.percentualComissao;
    const codigoImovel = requisicao.body.imovelId;
    const codigoCliente = requisicao.body.clienteId;
    const codigoCorretor = requisicao.body.corretorId;
    Historico.update({
        dataNegociacao: formataNegociacao,
        percentualComissao: percentualComissao,
        imovelId: codigoImovel,
        clienteId : codigoCliente,
        corretorId : codigoCorretor
    }, {
        where: {
            codigo: codigoHistorico
        }
    }).then(() => {
        resposta.send('Atualizado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

//Rota para apagar
router.delete('/historico/:historicoId', (requisicao, resposta) => {
    const codigoHistorico = requisicao.params.historicoId;
    Historico.destroy({ where: { codigo: codigoHistorico } }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});


module.exports = router;