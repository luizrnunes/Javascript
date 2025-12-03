/**
 * Vetor (array)
 * @author Luiz Henrique Rodrigues Nunes
 */

//                [0]       [1]      [2]      [3]       [4]        [5]
let alunoEM1 = ["Victor", "Tania", "Pedro", "Maria", "Viviane", "Sirlei"]
console.log(typeof(alunoEM1))

// Lendo o valor de um array
console.log(alunoEM1)
console.table(alunoEM1)
console.log(alunoEM1.length) //exibe o tamanho do vetor
console.log(alunoEM1[3])

// Adicionando dados no array
// O push adiciona sempre no fim da lista
alunoEM1.push("Jorge")
console.table(alunoEM1)

//Modificando os dados de um vetor
alunoEM1[1] = "Tânia"
console.table(alunoEM1)

//Excluindo os dados de um vetor
//O comando delete exclui os dados sem alterar os indices
delete alunoEM1[3]
console.table(alunoEM1)

//Percorrendo um vetor
// Usamos um laço for para percorrer o indice e extrair os dados
let notas = [2, 5, 8, 7, 9, 4, 10]
//console.log(notas.length)
for (let i = 0; i < notas.length; i++){
    console.log(notas[i])
}
//simplificação do laço for para percorrer um array
//for each
notas.forEach((notas) => {
    console.log(notas)
})
//in
for (let i in notas){
    console.log(notas[i])
}