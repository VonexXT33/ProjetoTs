"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.debug = debug;
exports.log = log;
exports.decoratorMetodo = decoratorMetodo;
function debug(classe) {
    console.log('Classe criada!', classe);
}
function log(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.created_at = new Date('2026-08-17');
        }
    };
}
function decoratorMetodo(target, propertyKey, descriptor) {
    descriptor.value = (...args) => {
        return args.map(item => {
            return item.toUpperCase();
        });
    };
}
//# sourceMappingURL=index.js.map