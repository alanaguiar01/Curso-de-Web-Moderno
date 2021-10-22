function tratamentoErroELancar(erro){
    //trow new Error (',,,)
    //throw 10
    //throw true
    //throw 'menssagem'
    throw{
    nome: erro.name,
    msg: erro.message,
    date: new Date
    }
}
function imprimirNomeGritado(obj){
try{
    console.log(obj.name.toUpperCase() + '!!!')
}catch (e) {
        tratamentoErroELancar (e)
    }
}
const obj = { nome: 'roberto'}
imprimirNomeGritado(obj)