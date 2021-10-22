function calcularAdcional (idade){
    let plano = 100 
    if (idade <= 10) return plano += 80
    else if (idade > 10 && idade <= 30) return plano += 50
    else if (idade > 30 && idade <=60) return plano += 95
    else return plano += 130
}
console.log(calcularAdcional(65))