function minLength(length: number){
    return (target: any, key: string) => {
        let _value = target[key];

        const getter = () => _value;
        const setter = (value: string) => {
            if (value.length < length){
                throw new Error(`Tamanho mínimo do nome é igual a ${length}`);
            } else {
                value = _value;
            }
        };

        Object.defineProperty(target, key, { 
            get: getter,
            set: setter,
        })
    };
}

class Cachorro {
    @minLength(3)
    name: string;

    constructor(name: string){
        this.name = name;
    }
}

const dog = new Cachorro("juca")