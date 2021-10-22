class pessoa {
    constructor (nome){
        this.nome = nome
    }

falar(){
    console.log(`meu nome é ${this.nome}`)

}
}
const p1 = new pessoa ('Joao')
p1.falar()

const criarPessoa = nome => {
    return {
        falar: () => console.log(`meu nome é ${this.nome}`)
    }
}
const p2 = criarPessoa('João')
p2.falar()