const alunos = [
    {nome: 'João', nota: 7.3, bolsiste: false},
    {nome: 'Maria', nota: 9.2, bolsiste: true},
    {nome: 'Pedro', nota: 9.8, bolsiste: false},
    {nome: 'Ana', nota: 8.7, bolsiste: true}
]
console.log(alunos.map(a => a.nota))
const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
}, 0)

console.log(resultado)