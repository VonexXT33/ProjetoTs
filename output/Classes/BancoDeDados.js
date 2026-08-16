"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BancoDeDados = void 0;
class BancoDeDados {
    ip;
    usuario;
    senha;
    tipoBanco;
    static LOCAL1 = '127.0.0.1';
    static LOCAL2 = '123.3.2.0';
    static TIPO_MYSQL = 'MySQL';
    static TIPO_SQLSERVER = 'SQL Server';
    constructor(ip, usuario, senha, tipoBanco) {
        this.ip = ip;
        this.usuario = usuario;
        this.senha = senha;
        this.tipoBanco = tipoBanco;
    }
    static factory(parametos) {
        if (![
            BancoDeDados.TIPO_MYSQL,
            BancoDeDados.TIPO_SQLSERVER
        ].includes(parametos.tipoDeBanco)) {
            throw new Error('Tipo de banco invalido!!');
        }
        return new BancoDeDados(parametos.ip, parametos.usuario, parametos.senha, parametos.tipoDeBanco);
    }
}
exports.BancoDeDados = BancoDeDados;
//# sourceMappingURL=BancoDeDados.js.map