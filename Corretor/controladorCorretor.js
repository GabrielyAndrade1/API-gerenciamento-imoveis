const express = require('express');
const Corretor = require('./modeloCorretor');

const router = express.Router();

//Rota para pesquisar todos os cadastros
router.get('/corretor', async (requisicao, resposta) => {
    const corretor = await Corretor.findAll(  );
    resposta.send(corretor);
});

//Rota para pesquisar pelo ID
router.get('/corretor/:corretorId', async (requisicao, resposta) => {
    const codigoCorretor = requisicao.params.corretorId;
    resposta.json(await Corretor.findByPk(codigoCorretor));
});

//Rota para cadastro
router.post('/corretor', (requisicao, resposta) => {
    const nome = requisicao.body.nome;
    const cpf = requisicao.body.cpf;
    const cnpj = requisicao.body.cnpj;
    const dataNascimento = requisicao.body.dataNascimento;
    const codigoEndereco = requisicao.body.enderecoId;
    Corretor.create({
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

//Rota para alteração
router.put('/corretor/:corretorId', (requisicao, resposta) => {
    const codigoCorretor = requisicao.params.corretorId;
    const nome = requisicao.body.nome;
    const cpf = requisicao.body.cpf;
    const cnpj = requisicao.body.cnpj;
    const dataNascimento = requisicao.body.dataNascimento;
    const codigoEndereco = requisicao.body.enderecoId;
    Corretor.update({
        nome: nome,
        cpf: cpf,
        cnpj: cnpj,
        dataNascimento : dataNascimento,
        enderecoId: codigoEndereco
    }, {
        where: {
            codigo: codigoCorretor
        }
    }).then(() => {
        resposta.send('Atualizado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

//Rota para apagar
router.delete('/corretor/:corretorId', (requisicao, resposta) => {
    const codigoCorretor = requisicao.params.corretorId;
    Clie.destroy({ where: { codigo: codigoCliente } }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});


module.exports = router;