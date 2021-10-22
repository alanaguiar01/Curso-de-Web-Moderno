function calcularnota(codAluno, nota1, nota2, nota3){
    let notas = []
    notas.push(nota1)
    notas.push(nota2)
    notas.push(nota3)

    let mediaFinal = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3))
    return `Codigo do aluno: ${codAluno} notas: ${nota1} ${nota2} ${nota3} e a Média ${mediaFinal < 5 ? 'Reprovado.' : 'Aprovado.'}`

}
console.log(calcularnota(100, 8, 7, 6))