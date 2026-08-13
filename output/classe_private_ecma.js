"use strict";
class Documento {
    valor = '123123994';
    #numero = 4;
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