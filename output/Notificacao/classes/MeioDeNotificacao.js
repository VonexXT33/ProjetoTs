"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SMS = exports.Email = void 0;
const notificacao_1 = __importDefault(require("./notificacao"));
class Email extends notificacao_1.default {
    enviar(usuario) {
        console.log(`Enviando email para ${usuario.email} ...`);
        return true;
    }
}
exports.Email = Email;
class SMS extends notificacao_1.default {
    enviar(usuario) {
        console.log(`Enviando SMS para o telefone ${usuario.telefone} ...`);
        return true;
    }
}
exports.SMS = SMS;
//# sourceMappingURL=MeioDeNotificacao.js.map