let comparaComThis = function (param){
    console.log(this === param)
    return 21 + param
}
comparaComThis(5)
console.log(comparaComThis(5))

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)
comparaComThis(global)
comparaComThis(module.export)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.export)
