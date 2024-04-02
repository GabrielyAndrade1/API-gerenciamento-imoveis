const express = require('express');
const Proprietario = require('./modeloProprietario');

const router = express.Router();

//Rota para pesquisar todos os registros
router.get('/prorpietario', async (requisicao, resposta) => {
    const proprietario = await Cliente.findAll(  );
    resposta.send(proprietario);
});

//Rota para pesquisar registro pelo ID
router.get('/proprietario/:proprietarioId', async (requisicao, resposta) => {
    const codigoProprietario = requisicao.params.proprietarioId;
    resposta.json(await Proprietario.findByPk(codigoProprietario));
});

//Rota para cadastrar um registro
router.post('/proprietario', (requisicao, resposta) => {
    const nome = requisicao.body.nome;
    const cpf = requisicao.body.cpf;
    const cnpj = requisicao.body.cnpj;
    const dataNascimento = requisicao.body.dataNascimento;
    const codigoEndereco = requisicao.body.enderecoId;
    Proprietario.create({
        nome: nome,
        cpf: cpf,
        cnpj: cnpj,
        dataNascimento : dataNascimento,
        enderecoId: codigoEndereco
    }).then(() => {
        resposta.send('Cadastrado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

//Rota para editar um registro
router.put('/proprietario/:proprietarioId', (requisicao, resposta) => {
    const codigoProprietario = requisicao.params.proprietarioId;
    const nome = requisicao.body.nome;
    const cpf = requisicao.body.cpf;
    const cnpj = requisicao.body.cnpj;
    const dataNascimento = requisicao.body.dataNascimento;
    const codigoEndereco = requisicao.body.enderecoId;
    Proprietario.update({
        nome: nome,
        cpf: cpf,
        cnpj: cnpj,
        dataNascimento : dataNascimento,
        enderecoId: codigoEndereco
    }, {
        where: {
            codigo: codigoProprietario
        }
    }).then(() => {
        resposta.send('Atualizado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

//Rota para deletar um registro
router.delete('/proprietario/:proprietarioId', (requisicao, resposta) => {
    const codigoProprietario = requisicao.params.proprietarioId;
    Proprietario.destroy({ where: { codigo: codigoProprietario } }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});


module.exports = router;