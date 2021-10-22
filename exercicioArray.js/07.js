function estaEntre (numero, minimo, maximo, inclusivo){
 if (inclusivo) return numero >= minimo && numero <= maximo

 return numero > minimo && numero < maximo
}
console.log(estaEntre(3, 100, 0))