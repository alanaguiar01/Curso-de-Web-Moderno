function compras (trabalho1, trabalgo2){
    const compraSorvete = trabalho1 || trabalho2
    const comptaTv50 = trabalho1 && trabalho2
    //const compraTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !compraSorvete //operador unario
    return {compraSorvete, comptaTv50, comprarTv32, manterSaudavel}
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
