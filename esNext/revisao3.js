// ESB: Object.values/Object.entires
const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

//Melhorias na notação Literal
const nome = 'Carla'
const pessoa = {
    nome, 
    ola(){
        return 'oi gente!'
    }
}
console.log(pessoa.nome, pessoa.ola())

//class 
class animal{}
class Cachorro extends animal{
    falar (){
        return 'Au au!'
    }
}
console.log(new Cachorro().falar())
