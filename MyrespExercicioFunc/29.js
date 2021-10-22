function observarIntervalo(vetor){
    qtdNumeroIntervalo = 0
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i] >= 10 && vetor[i] <= 20)
        qtdNumeroIntervalo++
    }
    return `${qtdNumeroIntervalo} é o numero de intervalos`
}
vetor = [1, 2, 4, 10, 20, 30, 35, 45, 50]
console.log(observarIntervalo(vetor))