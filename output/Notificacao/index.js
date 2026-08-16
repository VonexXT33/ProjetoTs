"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MeioDeNotificacao_1 = require("./classes/MeioDeNotificacao");
new MeioDeNotificacao_1.Email().enviar({
    nome: 'José Alves',
    email: 'joseVn00@gmail.com',
    telefone: '4432937749'
});
new MeioDeNotificacao_1.SMS().enviar({
    nome: 'José Alves',
    email: 'joseVn00@gmail.com',
    telefone: '4432937749'
});
//# sourceMappingURL=index.js.map