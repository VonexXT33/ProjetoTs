interface IBancoDeDados {
    ip: string;
    usuario: string;
    senha: string;
    tipoDeBanco: string;
}

class BancoDeDados {
    static LOCAL = '127.0.0.1';
    static  TIPO_MYSQL = 'MySQL';
    static TIPO_SQLSERVER = 'SQL Server';

    constructor (
        private ip: string,
        private usuario: string,
        private senha: string,
        private tipoBanco: string
    ) { }

    static factory(parametos: IBancoDeDados) {

        if ([
            BancoDeDados.TIPO_MYSQL,
            BancoDeDados.TIPO_SQLSERVER
        ].includes(parametos.tipoDeBanco)) {

            throw new Error('Tipo de banco invalido!!');
            
        }

        return new BancoDeDados(
            parametos.ip,
            parametos.usuario,
            parametos.senha,
            parametos.tipoDeBanco
        );
        
    }

} 

const conexaoBanco = BancoDeDados.factory({
    tipoDeBanco: BancoDeDados.TIPO_MYSQL,
    senha: 'root',
    usuario: 'root',
    ip: BancoDeDados.LOCAL
});

console