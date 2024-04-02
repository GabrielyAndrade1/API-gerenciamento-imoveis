const espresso = require('express');

const meuServidor = espresso();
meuServidor.use(espresso.json());

const rotasCorretor = require('./Corretor/controladorCorretor');
meuServidor.use(rotasCorretor);

const rotasFotos = require('./Fotos/controladorFotos');
meuServidor.use(rotasFotos);

const rotasTipoImovel = require('./TipoImovel/controladorTipoImovel');
meuServidor.use(rotasTipoImovel);

const rotasHistorico = require('./Historico/controladorHistorico');
meuServidor.use(rotasHistorico);

const rotasVisita = require('./Visita/controladorVisita');
meuServidor.use(rotasVisita);

const rotasImovel = require('./Imovel/controladorImovel');
meuServidor.use(rotasImovel);

const rotasEndereco = require('./Endereco/controladorEndereco');
meuServidor.use(rotasEndereco);

const rotasCliente = require('./Cliente/controladorCliente');
meuServidor.use(rotasCliente);

const rotasProprietario = require('./Proprietario/controladorProprietario');
meuServidor.use(rotasProprietario);

meuServidor.listen(4300, () => {
    console.log('Meu primeiro servidor na porta 4300.');
});