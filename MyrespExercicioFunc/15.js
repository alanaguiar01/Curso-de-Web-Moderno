function revendedora(carros){
    switch(carros){
        case 'hatch': return 'compra efetuada com sucesso'
        case 'sedan':
        case 'motocicletas':
        case 'caminhonetes': 
        return "Tem certeza que não quer esse modelo?"
        default:
            return "Não estamos com esse tipo de automovel"
    }
}
console.log(revendedora('hatch'));
console.log(revendedora('motocicletas'));
console.log(revendedora('sedan'));
console.log(revendedora('caminhonetes'));
console.log(revendedora('jetski'));
