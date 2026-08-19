"use strict";
class Cadastro {
    constructor(nome, nascimento) {
        this.nome = nome;
        this.nascimento = nascimento;
    }
}
class Cliente extends Cadastro {
    constructor(nome, nascimento, email, empresa) {
        super(nome, nascimento);
        this.email = email;
        this.empresa = empresa;
    }
}
const clienteJose = new Cliente("José Alves", new Date("2002-02-04"), "josealv.neto04b@gmail.com", "VonexXTec");
console.log(clienteJose);
//# sourceMappingURL=classe_heranca.js.map