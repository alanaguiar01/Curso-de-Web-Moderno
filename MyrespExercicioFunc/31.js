function CalcularNegativos(vetor){
    qtdNumeroNegativo = 0
    for (let i = 0; i < vetor.length; i++){
        if (vetor[i]  < 0 )
        qtdNumeroNegativo++
    }
    return qtdNumeroNegativo
}
vetor = [1, 2, 4, 10, 20, 30, -35, 45, 50]
console.log(CalcularNegativos(vetor))