"use strict";
class Veiculo {
    constructor(modelo, cor, ano) {
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
    }
    ligarCarro() {
        return false;
    }
}
const carro = new Veiculo("Corolla", "Prata", 2025);
console.log(carro.modelo);
console.log(carro.cor);
console.log(carro.ano);
console.log(carro.ligarCarro());
//# sourceMappingURL=classe_public.js.map