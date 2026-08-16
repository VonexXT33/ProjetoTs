class Domicilio {
    cor: string;
    endereco: object;
    bairro: string;

    constructor(cor: string, endereco: object, bairro: string) {
        this.cor = cor,
        this.endereco = endereco,
        this.bairro = bairro 
    }

   public tocarInterfone(): string

    {
        return 'interfone tocado';
    }

    public chamarNome(): string 
    
    {
        return 'Ja vai!! só um momento.';

    }

}

class Casa extends Domicilio {

     public entrarNaCasa()

    {
     return this.atenderInterfone('Oi, quem fala?');
    }
    
   protected atenderInterfone(mensagem: string): string 
   

    {

        return mensagem;
    }

}
 
    const casaDoJose = new Casa (

         'Cinza Escuro',
         {cidade: 'Narandiba'},
         'Concordia'

         )

    const casaDaMirelly = new Casa (

        'Azul',
        {cidade: 'Narandiba'},
        'Centro'

         )

         console.log(casaDoJose.entrarNaCasa)




