function fatorial(valor){
    if (valor==0){
        return 1
    }else {
        return valor * fatorial(valor - 1)
    }
}
console.log(fatorial(5))