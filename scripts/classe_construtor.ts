class Pedido {

       id: string = '';

    constructor(

       private  produto: string,
       protected valorTotal: number,
       public previsaoEntrega: Date

    ) { }
          
}

const Pedido1 = new Pedido ('Teclado Mecanico', 240, new Date('2026-08-17'));

console.log(Pedido1.id);
 


