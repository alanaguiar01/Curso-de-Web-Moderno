function Carro (VelocidadeMaxima = 200, delta = 5){
    //atributo privado
    let velocidadeAtual = 0

//metodo publico
this.acelerar = function (){
    if (velocidadeAtual + delta <= VelocidadeMaxima){
        velocidadeAtual += delta
    }else{
        velocidadeAtual = VelocidadeMaxima
    }
}
//metodo publico 
this.getVelocidadeAtual = function (){
    return velocidadeAtual
}
}
const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

