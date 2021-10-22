function calculadora (valor1, operador, valor2){
    switch(operador){
        case '+': 
        return valor1 + valor2
        case '-': 
        return valor1 - valor2
        case '*': 
        return valor1 * valor2
        case '/': 
        return valor1 / valor2
        default: return "operação invalida"
    }
}
console.log(calculadora(2, '+', 3));
console.log(calculadora(2, '-', 3));
console.log(calculadora(2, '*', 3));
console.log(calculadora(2, '/', 3));
console.log(calculadora(2, 'a', 3));

