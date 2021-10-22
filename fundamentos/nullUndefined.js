let valor // não inicializado
console.log(valor)

valor = null // ausência de valor
console.log(valor)
//console.log(valor.toString()) //erro

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = undefined //existe atribuir undefined
console.log(!!produto.preco)
//delete produto.preco
console.log(produto)

produto.preco = null //sem preco
console.log(!!produto.preco)
console.log(produto)