const express = require('express');
const Endereco = require('./modeloEndereco');

const router = express.Router();

//Rota para pesquisar todos os cadastros
router.get('/endereco', async (requisicao, resposta) => {
    const endereco = await Endereco.findAll(  );
    resposta.send(endereco);
});

//Rota para pesquisar pelo ID
router.get('/endereco/:enderecoId', async (requisicao, resposta) => {
    const codigoEndereco = requisicao.params.enderecoId;
    resposta.json(await Endereco.findByPk(codigoEndereco));
});

//Rota para cadastro
router.post('/endereco', (requisicao, resposta) => {
    const estado = requisicao.body.estado;
    const cidade = requisicao.body.cidade;
    const bairro = requisicao.body.bairro;
    const rua = requisicao.body.rua;
    const complemento = requisicao.body.complemento;
    const cep = requisicao.body.cep;
    Endereco.create({
        estado: estado,
        cidade: cidade,
        bairro: bairro,
        rua : rua,
        complemento : complemento,
        cep: cep
    }).then(() => {
        resposta.send('Cadastrado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

//Rota para alteração
router.put('/endereco/:enderecoId', (requisicao, resposta) => {
    const codigoEndereco = requisicao.params.enderecoId;
    const estado = requisicao.body.estado;
    const cidade = requisicao.body.cidade;
    const bairro = requisicao.body.bairro;
    const rua = requisicao.body.rua;
    const complemento = requisicao.body.complemento;
    const cep = requisicao.body.cep;
    Endereco.update({
        estado: estado,
        cidade: cidade,
        bairro: bairro,
        rua : rua,
        complemento : complemento,
        cep: cep
    }, {
        where: {
            codigo: codigoEndereco
        }
    }).then(() => {
        resposta.send('Atualizado com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});

//Rota para apagar
router.delete('/endereco/:enderecoId', (requisicao, resposta) => {
    const codigoEndereco = requisicao.params.enderecoId;
    Clie.destroy({ where: { codigo: codigoEndereco } }).then(() => {
        resposta.send('Removido com sucesso.');
    }).catch((erro) => {
        resposta.send('Ocorreu um erro: ' + erro);
    });
});


module.exports = router;