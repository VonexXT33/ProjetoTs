import MeuUsuario from "../interfaces/meuUsuario";

export default abstract class Notificacao {

   abstract enviar(usuario: MeuUsuario): boolean;

}