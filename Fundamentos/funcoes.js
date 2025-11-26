/**
 * Estudo das Funções
 * @author Luiz Henrique Rodrigues Nunes
 */

// função simples
function hello(){
    console.log("Hello function")
}

console.log(typeof(hello))
hello()

//função anônima
// Podemos usar let ou const para criar uma função 
// anônima, a vantagem de criar funções desta forma
// e armazenar o resultado da execução
let hello2 = function(){
    console.log("Hello função anônima")
}
console.log(typeof(hello2))
hello2()

// Simplicação da função anônima (arrow function)
// function () simplificado para:      () =>
const hello3 = () => {
    console.log("Hello função anônima simplificada")
}
console.log(typeof(hello3))
hello3()

// Simplificação 2 da função anônima 
// Neste caso só uma linha de cod. é processada
const hello4 = _=> console.log("Hello função anônima simplificada 2")

console.log(typeof(hello4))
hello4()

// Função com parâmetros e retorno
function somar(num1, num2){
    return console.log(num1 + num2)
}

console.log(typeof(somar))
somar(2,2)

// Função anônima com parâmetros e retorno simplificada
const somarA = (num1, num2) => {
    return console.log(num1 + num2)
}
console.log(typeof(somarA))
somarA(3,4)

// Função anônima com parâmetros e retorno simplificada 2
// Neste caso omitimos chaves e o retorno é implícito
// CUIDADO!!!! Não é uma função simples a dica são os parâmetros
const somarAS = (num1, num2) => console.log(num1 + num2)

console.log(typeof(somarAS))
somarAS(5,10)
