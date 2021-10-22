function Venda(frutas){
    switch(frutas){
        case 'maça': console.log('Não Vendemos essa fruta aqui')
        break
        case 'kiwi': console.log('Estamos com escassez de kiwi')
        break
        case 'Melancia': console.log('Aqui está, são R$ 3,00 reais o quilo')
        break
        default: console.log("fruta invalida")
    }
}
Venda('maça')
Venda('kiwi')
Venda('Melancia')
Venda('carro')