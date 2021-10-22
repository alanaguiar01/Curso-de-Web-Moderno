function salarioFuncionario (qtHorames, salPorHora){
    let salarioMes = qtHorames * salPorHora
    return `o meu salario mensal é R$: ${salarioMes}`
}
console.log(salarioFuncionario (150, 40.5))