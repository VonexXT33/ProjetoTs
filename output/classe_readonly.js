"use strict";
class Usuario {
    constructor() {
        this.id = '128378278';
        this.nome = 'José';
        this.#senha = '2377123';
        this.dataCadastro = new Date('2021-01-01');
    }
    #senha;
    mostrarId() {
        return this.id;
    }
}
const José = new Usuario();
console.log(José.mostrarId());
//# sourceMappingURL=classe_readonly.js.map