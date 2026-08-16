"use strict";
class Usuario {
    id = '128378278';
    nome = 'José';
    #senha = '2377123';
    dataCadastro = new Date('2021-01-01');
    mostrarId() {
        return this.id;
    }
}
const José = new Usuario();
console.log(José.mostrarId());
//# sourceMappingURL=classe_readonly.js.map