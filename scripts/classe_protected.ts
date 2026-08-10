class Domicilio {
    cor: string;
    rua: object;
    bairro: string;

    constructor(cor: string, rua: object, bairro: string) {
        this.cor = cor,
        this.rua = rua,
        this.bairro = bairro 
    }

    tocarInterfone(): string {
        return 'interfone tocado';
    }

    // class Casa extends Domicilio {


    }
 


// }