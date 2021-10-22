function inverso(valor){
    const tipo = typeof valor
    if (tipo == 'boolean') return !valor
    else if (tipo == 'number') return -valor
    else return `booleanos ou numeros esperados, mas o parametro é de ${tipo}`

}
console.log(inverso(12))