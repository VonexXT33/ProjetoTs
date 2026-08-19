"use strict";
class Permisaao {
    constructor(_nome, _nivel) {
        this._nome = _nome;
        this._nivel = _nivel;
    }
    get nome() {
        return this._nome.toUpperCase();
    }
    set nome(NovoNome) {
        if (NovoNome.length < 5) {
            throw Error("O nome da permissao deve ter no minimo 5 letras!!");
        }
        this._nome = NovoNome;
    }
}
const permissao = new Permisaao('Adm', 1);
try {
    permissao.nome = 'Lin';
}
catch (e) {
}
//# sourceMappingURL=classe_getters_setters.js.map