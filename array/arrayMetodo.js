const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()  //Massa quebrou o carro
console.log(pilotos)

pilotos.push('Vestappen') // Adiciona ultimo vetor
console.log(pilotos)

pilotos.shift() // Remove o primeiro
console.log(pilotos)

pilotos.unshift('Hamilton') //Adiciona o primeiro
console.log(pilotos)

//splice pode adicionar e remover elemento

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

//remover
pilotos.splice(3, 1) // Massa quebrou :(
console.log(pilotos)

const algunspilotos1 = pilotos.slice(2) // Novo Array
console.log(algunspilotos1)

const algunspilotos2 = pilotos.slice(1, 4) // Novo Array
console.log(algunspilotos2)