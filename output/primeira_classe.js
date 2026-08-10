"use strict";
class Pessoa {
    nome;
    idade;
    altura;
    constructor(nome, idade, altura) {
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
    }
    toString() {
        return `A pessoa ${this.nome} tem ${this.idade} anos de idade e ${this.altura} de altura.`;
    }
}
const jose = new Pessoa('José Alves Bezerra Neto', 24, 1.80);
const allan = new Pessoa('Allan Charles Bulhoes', 23, 1.82);
const emerson = new Pessoa('Emerson Abreu', 34, 1.70);
console.log(jose.toString());
console.log(allan.toString());
console.log(emerson.altura);
//# sourceMappingURL=primeira_classe.js.map