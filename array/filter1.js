const produtos = [
    {nome: 'notebook', preco: 2499, fragil: true},
    {nome: 'ipad pro', preco: 4199, fragil: true},
    {nome: 'copo de vidro', preco: 17.49, fragil: true},
    {nome: 'copo de plastico', preco: 18.99, fragil: true}
]
console.log(produtos.filter(function(p){
    return false
}))

const caro = produtos => produtos.preco >= 500
const fragil = produtos => produtos.fragil

console.log(produtos.filter(caro).filter(fragil))