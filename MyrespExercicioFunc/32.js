function CalcularMedia(vetor){
    
    let soma = 0
    //let media
    
    for (let i = 0; i < vetor.length; i++){
     
    soma += vetor[i]
    }
    return soma / vetor.length
    
}   
vetor = [10, 10, 10]
console.log(CalcularMedia(vetor))