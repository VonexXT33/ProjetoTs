"use strict";
class BancoDeDados {
    ip;
    usuario;
    senha;
    tipoBanco;
    static LOCAL = '127.0.0.1';
    static TIPO_MYSQL = 'MySQL';
    static TIPO_SQLSERVER = 'SQL Server';
    constructor(ip, usuario, senha, tipoBanco) {
        this.ip = ip;
        this.usuario = usuario;
        this.senha = senha;
        this.tipoBanco = tipoBanco;
    }
    static factory(parametos) {
        if ([
            BancoDeDados.TIPO_MYSQL,
            BancoDeDados.TIPO_SQLSERVER
        ].includes(parametos.tipoDeBanco)) {
            throw new Error('Tipo de banco invalido!!');
        }
        return new BancoDeDados(parametos.ip, parametos.usuario, parametos.senha, parametos.tipoDeBanco);
    }
}
const conexaoBanco = BancoDeDados.factory({
    tipoDeBanco: BancoDeDados.TIPO_MYSQL,
    senha: 'root',
    usuario: 'root',
    ip: BancoDeDados.LOCAL
});
console;
//# sourceMappingURL=classe_prop_metodo_estatico.js.map