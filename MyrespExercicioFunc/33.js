let vetorInteiro = [1, 2, 3, 4]
let vetorString = ['1', '2', '3', '4']
let vetorDouble = [1.1, 2.2, 3.3, 4.4]

const todos = vetorInteiro.concat(vetorString, vetorDouble)
console.log(todos);

const todos2 = [[1, 2, 3, 4]].concat([vetorString], [vetorDouble])
console.log(todos2);