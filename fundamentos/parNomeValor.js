// par nome/valor
const saudacao = 'ola'  //contexto léxico 1

function exec(){
    const saudacao = 'falaaa' //contexto léxico 2
    return saudacao
}
//objetos são grupos animados de pares nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        longradoura: 'rua muito bonita',
        nunmero: 123
    }

}
console.log(saudacao)
console.log(exec())
console.log(cliente)