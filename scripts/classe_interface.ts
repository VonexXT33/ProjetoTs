interface ITelefone {

    numero: string;

}


interface IEmailV2 {

    nome: string;
    email: string;

}



interface INotificacaoV2 {

    enviar(usuario: MeuUsuarioV2): boolean;

}

interface MeuUsuarioV2 {

    nome: string;
    email: string;
    telefone: string;

}

abstract class NotificacaoV2 implements INotificacaoV2 {

   abstract enviar(usuario: MeuUsuarioV2): boolean;

}

class EmailV2 extends NotificacaoV2 implements INotificacaoV2, IEmailV2 {
    nome: string;
    email: string;
    telefone: string;

    constructor(usuario:MeuUsuarioV2 ) {

        super();
        this.nome = usuario.nome;
        this.email = usuario.email;
        this.telefone = usuario.telefone;
       
    }
    
    enviar(): boolean {

        console.log(`Enviando email para ${this.email} ...`);
        return true;
       
    }

    
}

class SMSV2 extends NotificacaoV2 implements INotificacaoV2, ITelefone {

    numero: string;

    constructor (usuario: MeuUsuarioV2) {

        super();
        this.numero = usuario.telefone;

    }

    enviar(): boolean {
        console.log(`Enviando SMS para o telefone ${this.numero} ...`);
        return true;
    }


}

new EmailV2({
    nome: 'José Alves',
    email: 'joseVn00@gmail.com',
    telefone: '4432937749'
});

new SMSV2({
    nome: 'José Alves',
    email: 'joseVn00@gmail.com',
    telefone: '4432937749'
});

