function calcularTriangulo (lado1, lado2, lado3){
        if (lado1 == lado2 && lado2 == lado3){
            return 'equilátero'
        }
        else if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1){
            return 'isóceles'
        }
        else{
            return 'Escaleno'
        }
    }
console.log(calcularTriangulo(2, 2, 2));    
console.log(calcularTriangulo(2, 2, 3))
console.log(calcularTriangulo(1, 2, 3))