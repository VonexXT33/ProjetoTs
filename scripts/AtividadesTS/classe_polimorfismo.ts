class Empresa {

    prestarServico() {

        return 'Empresa prestando servico';

    }


}

class Padaria extends Empresa {

    prestarServico() {

        return 'Vendendo pães';

    }


}

console.log(new Empresa().prestarServico());


