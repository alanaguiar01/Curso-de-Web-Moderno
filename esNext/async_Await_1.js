function esperarPor(tempo = 2000){
    return new Promise (function (resolve){
        setTimeout(() => resolve(), tempo)
    })
}
/*
esperarPor(2000)
    .then(() => console.log('Execultando promise...'))
    .then(esperarPor)
    .then(() => console.log('Execultando promise...'))
    .then(esperarPor)
    .then(() => console.log('Execultando promise...'))
 */  
function retornarValor () {
    return new Promise (resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}
async function retornarValorRapido () {
    return 20
}
    
async function execultar() {
    let valor = await retornarValorRapido()

    await esperarPor(1500)
    console.log(`Async/Await ${valor}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 1}...`)

    await esperarPor(1500)
    console.log(`Async/Await ${valor + 2}...`)

    return valor + 3
}    

async function execultarDeVerdade(){
    const valor = await execultar()
    console.log(valor)
}

execultar().then(console.log)