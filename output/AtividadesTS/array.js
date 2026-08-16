"use strict";
const filmesCategorias = ["Ação", "Comédia", "Drama", "Ficção Científica", "Terror"];
filmesCategorias.push("Romance");
filmesCategorias.push("Animação");
const filmesAnos = [];
for (let ano = 1980; ano <= new Date().getFullYear(); ano++) {
    filmesAnos.push(ano);
}
const acessorios = ["Mouse", "Teclado", "Monitor", "Headset"];
acessorios.push("Webcam");
acessorios.push("Microfone");
console.log(acessorios);
const carros = [
    { marca: "Toyota", modelo: "Corolla", ano: 2020 },
    { marca: "Honda", modelo: "Civic", ano: 2019 },
    { marca: "Ford", modelo: "Mustang", ano: 2021 },
];
//# sourceMappingURL=array.js.map