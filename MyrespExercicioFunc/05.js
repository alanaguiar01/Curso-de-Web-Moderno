function reduzirDecimal(valorDecimal){
    valoresReais = `R$ ${valorDecimal.toFixed(2).toString().replace(".", ",")}` 
    console.log(valoresReais)
}
reduzirDecimal(0.3 + 0.4)



