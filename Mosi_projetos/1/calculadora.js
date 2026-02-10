let altura = Number(1.75)
let peso = Number(80)
//let imc = altura * altura
let imc_final = peso / (altura * altura)
let arredondado = +imc_final.toFixed(2);
window.alert(`IMC: ${arredondado}`)