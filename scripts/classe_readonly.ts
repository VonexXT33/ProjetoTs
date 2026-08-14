 class Usuario {

   readonly id: string = '128378278';
   nome: string = 'José'
   #senha: string = '2377123';
   readonly dataCadastro: Date = new Date('2021-01-01');

  mostrarId() {

    return this.id;

  }

 }

 const José = new Usuario();

//  José.id = '2193883412';

console.log(José.mostrarId());



 