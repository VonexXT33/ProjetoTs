"use strict";
class Professor {
    nome;
    idade;
    materia;
    constructor(nome, idade, materia) {
        this.nome = nome;
        this.idade = idade;
        this.materia = materia;
    }
    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} de idade, minha matéria é ${this.materia}`;
    }
    dizerNotas(...notas) {
        const notasTotal = notas.reduce((total, notaAtual) => total + notaAtual, 0);
        return notasTotal / notas.length;
    }
}
const joseA = new Professor('José Alves', 24, 'Git e GitHub');
console.log(joseA.seApresentar());
console.log(joseA.dizerNotas(8, 6, 7.4, 9));
//# sourceMappingURL=classe_metodo.js.map