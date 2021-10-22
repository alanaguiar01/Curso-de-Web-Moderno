const nums = [1, 2, 3, 4, 5]

//For com propósito
let resultados = nums.map(function (e){
    return e * 2
})
console.log(resultados)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)