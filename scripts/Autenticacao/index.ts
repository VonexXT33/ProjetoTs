namespace Autenticacao {

interface IUsuario {
    email: string;
    senha: string;
}

interface ICadastro {
    nome: string;
    email: string;
    senha: string;
    dataNascimento: Date;   
}

   export class LoginRegistro{

        login(usuario: IUsuario) {
            return usuario;
        }

        registro(Novousuario: ICadastro) {
            return Novousuario;
        }

    }

   export class Recuperacao {

    recuperarSenha() {

        return 'Enviando email para recuperacao de senha';

    }

    recuperarUsuario() {

        return 'Enviando email para recuperacao de usuario';

    }

    }

}

