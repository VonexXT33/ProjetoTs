"use strict";
class Documento {
    constructor() {
        this.valor = '123123994';
        this.#numero = 4;
    }
    #numero;
    mostrarDocumento() {
        return this.valor;
    }
    mostrarNumeroDoc() {
        return this.#numero;
    }
}
class Cpf extends Documento {
    #numero = 8;
}
const cpf = new Cpf();
//# sourceMappingURL=classe_private_ecma.js.map