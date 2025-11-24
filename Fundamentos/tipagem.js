/**
 * Tutorial JavaScript
 * Estudo da tipagem dinâmica
 * @author Luiz Henrique Rodrigues Nunes
 */

console.log("Strings >>>>>>>>>>>>>>>>>>>>")
let nome = "Luiz"
console.log(typeof (nome))
console.log(nome)
console.log(nome.replace("Luiz", "Henrique"))
// Concatenação (união)
console.log("Aluno: " + nome)
console.log("2" + 3) // não usar desta forma
console.log(`Professor: ${nome}`) // forma mais segura

console.log("Números >>>>>>>>>>>>>>>>>>>")
let peso = 63
let altura = 1.65
console.log(typeof (peso))
console.log(typeof (altura))
console.log(Number.isInteger(peso))
console.log(Number.isInteger(altura))
let imc
imc = peso / (altura * altura)
console.log(`IMC: ${imc.toFixed(2)}`)
//ATENÇÃO
console.log(10 / 0)
console.log("3" + 2)
console.log("3" - 2)
console.log("3x" - 2)
console.log("3" * 2)
console.log("10" / 2)
console.log(0.5 + 0.5)
console.log(0.1 + 0.2)
console.log(0.1 + 0.7)

console.log("Boleanos >>>>>>>>>>>>>>>>>>>>>>>>>>>>>")
let led = false
typeof (led)
console.log("Comparadores especiais")
let x = 2
let y = "2"
console.log(typeof (x))
console.log(typeof (y))
console.log(x == y)
console.log(x === y)

console.log("Problemas no uso do var >>>>>>>>>>>>>>>>>>>>")
console.log("var permite redeclarar uma variável!!!")
var media = 9
console.log(typeof (media))
console.log(media)
var media = 8
console.log(typeof (media))
console.log(media)

// Uso de chaves na linguagem JS
let mediaFinal = 3
console.log(`Média: ${mediaFinal}`)
if (mediaFinal < 5)
    console.log("Reprovado")
else
    console.log("Aprovado")
console.log("Emitir certificado")

for (let i = 1; i <= 10; i++)
    console.log(i)