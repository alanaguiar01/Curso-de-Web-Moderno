function repetir(repeticao, numRepeticao){
    
let array = []  //recebe array vazio    
for (let i = 0; i < numRepeticao; i++)
array.push(repeticao) // adiciona no final da array
return array
}
console.log(repetir(2, 3))


// metodo mais novo

function repetir(item, quantidade) {
    return Array(quantidade).fill(item)
    }
    console.log(repetir(4, 4))