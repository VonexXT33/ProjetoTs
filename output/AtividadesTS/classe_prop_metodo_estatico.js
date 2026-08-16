"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BancoDeDados_1 = require("../Classes/BancoDeDados");
const db1 = BancoDeDados_1.BancoDeDados.factory({
    tipoDeBanco: BancoDeDados_1.BancoDeDados.TIPO_MYSQL,
    senha: '293882',
    usuario: 'root',
    ip: BancoDeDados_1.BancoDeDados.LOCAL1
});
const db2 = BancoDeDados_1.BancoDeDados.factory({
    tipoDeBanco: BancoDeDados_1.BancoDeDados.TIPO_MYSQL,
    senha: '281284',
    usuario: 'Admin',
    ip: BancoDeDados_1.BancoDeDados.LOCAL1
});
const db3 = BancoDeDados_1.BancoDeDados.factory({
    tipoDeBanco: BancoDeDados_1.BancoDeDados.TIPO_SQLSERVER,
    usuario: 'Developer',
    senha: '02348734',
    ip: BancoDeDados_1.BancoDeDados.LOCAL2
});
const db4 = BancoDeDados_1.BancoDeDados.factory({
    tipoDeBanco: BancoDeDados_1.BancoDeDados.TIPO_MYSQL,
    senha: '324885',
    usuario: 'Dev',
    ip: BancoDeDados_1.BancoDeDados.LOCAL1
});
//# sourceMappingURL=classe_prop_metodo_estatico.js.map