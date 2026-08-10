class Cadastro {

    nome: string;
    nascimento: Date;

    constructor(nome: string, nascimento: Date){
        this.nome = nome;
        this.nascimento = nascimento;
    }

}

class Cliente extends Cadastro {
    email: string;
    empresa: string;


    constructor(nome: string,
        nascimento: Date,
        email: string,
        empresa: string
    ) {
        super(nome,nascimento);
        this.email = email;
        this.empresa = empresa;

    }
}
const clienteJose = new Cliente ("José Alves", new Date("2002-02-04"), "josealv.neto04b@gmail.com", "VonexXTec")

console.log(clienteJose);

