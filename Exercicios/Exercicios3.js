// par ou impar

let numero = parseInt(prompt("Digite um número:"));
if (numero % 2 === 0) {
    console.log("O número ${numero} é par");
} else {
    console.log("O número ${numero} é ímpar");
}

// Idade e permissão de CNH

let idade = parseInt(prompt("Digite sua idade:"));
if (idade < 16) {
    console.log("Não pode votar.");
} else if (idade >= 16 && idade < 18) {
    console.log("Voto opcional.");
} else {
    console.log("Voto obrigatório e pode tirar CNH.");
}