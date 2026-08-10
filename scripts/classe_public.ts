class Veiculo {
    modelo: string;
    cor: string;
    ano: number;

    constructor(modelo: string, cor: string, ano: number){
   
    this.modelo = modelo;
    this.cor = cor;
    this.ano = ano;
    }

    public ligarCarro(): boolean {
        return false
    }
}

const carro = new Veiculo("Corolla", "Prata", 2025);

console.log(carro.modelo);
console.log(carro.cor);
console.log(carro.ano);
console.log(carro.ligarCarro());