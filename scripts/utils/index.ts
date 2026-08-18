export function debug(classe: unknown) { 

    console.log('Classe criada!',classe);

 } 

export function log(constructor: any) { 

    return class extends constructor {

         created_at: Date = new Date('2026-08-17')

    } 
}

export function decoratorMetodo(

    target: unknown,
    propertyKey: string,
    descriptor: PropertyDescriptor
    
)  {

    descriptor.value = (...args: unknown[]) => {

   return args.map(item => {

       return (<string>item).toUpperCase();

    })

 }

}
