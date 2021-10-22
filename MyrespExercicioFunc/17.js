function lerPlanodeTrabalho(plano, salario){
switch (plano){
    case 'a': 
    return salario = salario * 0.10
    case 'b': 
    return salario = salario * 0.15
    case 'c': 
    return salario = salario * 0.20
    default: 
    return "Plano é invalido"
}
}
console.log(lerPlanodeTrabalho('a', 1000));
console.log(lerPlanodeTrabalho('b', 1000));
console.log(lerPlanodeTrabalho('c', 1000));
console.log(lerPlanodeTrabalho('d', 1000));
