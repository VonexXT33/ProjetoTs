function decoratosGetSet(valor: boolean) {

    return function (
        target: unknown,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {

        descriptor.enumerable = valor;

    }

}


class Login {

    constructor(
        private _usuario: string,
        private _senha: string
    ) {}
    @decoratosGetSet(true) 
    get usuario() {

        return this._usuario;

    }
    @decoratosGetSet(false)
    get senha() {

        return this._senha;

    }


}

const login = new Login('José Alves', '126214');

for (let chave in login ) {

    console.log('chave',chave);
    // console.log('chave', login[chave]);
    
}