# TypeScript para Angular - Resumo

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)


# Tipos
Exemplo de declaração de variável tipada:

`let nome: string = "lainara"`

### Tipos primitivos
- boolean
- number
- string

### Tipos especiais
- null
- undefined

### Tipos abrangentes
- any
- void

### Objeto
 
Importante que ele seja tipado para a previsibilidade do código ("Objeto shapado")

```
type ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};

let meuProduto: ProdutoLoja = {
    nome: "tênis",
    preco: 78.99,
    unidades: 5,
};

// ^^^^^^^^ define que o objeto meuProduto é do tipo ProdutoLoja, fazendo que seus atributos sejam necessariamente os tipados

```
# Array, Muti Types e Tuplas

## Simples

Duas formas de declarar arrays simples:

`let dados: string[] = ["Ana", "Maria", "João"]`

`let dados: Array<string> = ["Ana", "Maria", "João"]`

## Multi types
Os multi types são arrays capazes de armazenar mais de um tipo, indpendente da ordem em que são colocados

`let infos: (string|number)[] = ["Luana", 18, "Luiz", 26]`

## Tuplas

Já as tuplas oferecem rigidez em relação à ordem em que os valores são inseridos 

`
let boleto: [string, number, numer] = ["água", 120.59, 0002383922];
`
# Funções

Com parâmetros e retorno tipados como number: 
``` 
function soma(x: number, y: number): number {
    return x + t;
};

```

Com retorno multi tipo (nesse caso vai tanto receber quanto retornar ou número ou string)

``` 
function ligar(phone: number | string): number | string {
    return phone;
}

```

## Funções async

``` 
async function getDatabase(id: number): Promise<string> {
    retun "marcos";
}
```
# Interfaces

A estrutura é igual à de quando declaramaos um type, porém é mais utilizada no contexto de classes. É um contrato de estrutura

```
interface ProdutoLoja = {
    nome: string;
    preco: number;
    unidades: number;
};
```
# Generics
O generics serve para deixar em aberto qual o tipo de retorno de uma função, que será passado no momento de sua chamada. Ele permite uma tipagem dinâmica, sem recorrer ao any, tornando o código mais seguro. Exemplo:

```
function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 5], [3])
const strArray = concatArray<string[]>(["Ana", "Julia"], ["Gabriela"])

```
No array de números acima, não seria possível passar string e vice-versa, pois eles estão tipados usando generics

# Decorators

## Decorator a nível de classe
```
// função que insere na classe target a propriedade version
function apiVersion(version: string){
    return (target: any) => {
        Object.assign(target.prototype, {__version: version});
    };
}

// esse é o decorator. Insere na classe Api a propriedade __version dinamicamente
@apiVersion("1.33")
class Api{}
```

## Decorator a nível de atributo

A classe minLenght manipula o getter e o setter para validar atribuição de valores aos atributos da classe cachorro, na qual o decorator é inserido sobre o método nome, método esse que se deseja validar

```function minLength(length: number){
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
```