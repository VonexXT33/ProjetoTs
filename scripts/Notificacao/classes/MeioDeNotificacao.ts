import MeuUsuario from "../interfaces/meuUsuario";
import Notificacao from "./notificacao";

export class Email extends Notificacao {
    enviar(usuario: MeuUsuario): boolean {

        console.log(`Enviando email para ${usuario.email} ...`);
        return true;
       
    }

    
}

export class SMS extends Notificacao {
    enviar(usuario: MeuUsuario): boolean {

        console.log(`Enviando SMS para o telefone ${usuario.telefone} ...`);
        return true;
    }


}
