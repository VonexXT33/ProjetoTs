interface MeuUsuario {

    nome: string;
    email: string;
    telefone: string;

}

abstract class Notificacao {

   abstract enviar(usuario: MeuUsuario): boolean;

}

class Email extends Notificacao {
    enviar(usuario: MeuUsuario): boolean {

        console.log(`Enviando email para ${usuario.email} ...`);
        return true;
       
    }

    
}

class SMS extends Notificacao {
    enviar(usuario: MeuUsuario): boolean {

        console.log(`Enviando SMS para o telefone ${usuario.telefone} ...`);
        return true;
    }


}

new Email().enviar({
    nome: 'José Alves',
    email: 'joseVn00@gmail.com',
    telefone: '4432937749'
});

new SMS().enviar({
    nome: 'José Alves',
    email: 'joseVn00@gmail.com',
    telefone: '4432937749'
});

