"use strict";
class Domicilio {
    cor;
    endereco;
    bairro;
    constructor(cor, endereco, bairro) {
        this.cor = cor,
            this.endereco = endereco,
            this.bairro = bairro;
    }
    tocarInterfone() {
        return 'interfone tocado';
    }
    chamarNome() {
        return 'Ja vai!! só um momento.';
    }
}
class Casa extends Domicilio {
    entrarNaCasa() {
        return this.atenderInterfone('Oi, quem fala?');
    }
    atenderInterfone(mensagem) {
        return mensagem;
    }
}
const casaDoJose = new Casa('Cinza Escuro', { cidade: 'Narandiba' }, 'Concordia');
const casaDaMirelly = new Casa('Azul', { cidade: 'Narandiba' }, 'Centro');
console.log(casaDoJose.entrarNaCasa);
//# sourceMappingURL=classe_protected.js.map