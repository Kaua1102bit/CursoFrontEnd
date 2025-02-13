// Desafio 1 - Verificação de Idade

const prompt = require('prompt-sync')();

var idade = Number(prompt("Informe sua idade:"));
if (idade < 18) {
    console.log("Menor de Idade");

} else if (idade >= 18 && idade < 60) {
    console.log("Adulto");

} else if (idade > 60) {
    console.log("Idoso");

}





