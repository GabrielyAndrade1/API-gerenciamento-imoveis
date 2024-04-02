const express = require('express');
const Cliente = require('./modeloCliente');

const router = express.Router();

//Rota para pesquisar todos os clientes
router.get('/cliente', async (requisicao, resposta) => {
    const cliente = await Cliente.findAll(  );
    resposta.send(cliente);
});

//Rota para pesquisar cliente pelo ID
router.get('/cliente/:clienteId', async (requisicao, resposta) => {
    const codigoCliente = requisicao.params.clienteId;
    resposta.json(await Cliente.findByPk(codigoCliente));
});

router.post('/cliente', (requisicao, resposta) => {
    const nome = requisicao.body.nome;
    const cpf = requisicao.body.cpf;
    const cnpj = requisicao.body.cnpj;
    const dataNascimento = requisicao.body.dataNascimento;
    const codigoEndereco = requisicao.body.enderecoId;
    Cliente.create({
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

router.put('/cliente/:clienteId', (requisicao, resposta) => {
    const codigoCliente = requisicao.params.clienteId;
    const nome = requisicao.body.nome;
    const cpf = requisicao.body.cpf;
    const cnpj = requisicao.body.cnpj;
    const dataNascimento = requisicao.body.dataNascimento;
    const codigoEndereco = requisicao.body.enderecoId;
    Cliente.update({
        nome: nome,
        cpf: cpf,
        cnpj: cnpj,
        dataNascimento : dataNascimento,
        enderecoId: codigoEndereco
    }, {
        where: {
            codigo: codigoCliente
        }
    }).then(() => {
        resposta.send('Atualizado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

router.delete('/cliente/:clienteId', (requisicao, resposta) => {
    const codigoCliente = requisicao.params.clienteId;
    Cliente.destroy({ where: { codigo: codigoCliente } }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});


module.exports = router;