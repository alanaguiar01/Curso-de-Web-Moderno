const carrinho = [
    '{"nome": "borracha", "preço": 3.45}',
    '{"nome": "caderno", "preço": 13.90}',
    '{"nome": "kit de lapis", "preço": 41.22}', 
    '{"nome": "caneta", "preço": 7.50}'
]

// Retorna um array apenas com os preços 
const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preço 

const resultado = carrinho.map(paraObjeto).map(apenasPreco)
console.log(resultado)