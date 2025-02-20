// criando variáveis

let nome = "Kauã Santos";
let idade = 22;
let altura = 1.80;
let programador = true;
console.log(nome, idade, altura, programador);

// conversão de tipos 

let anoNascimento = 2002;
anoNascimento = anoNascimento.toString();
console.log(typeof anoNascimento);

let peso = "80.5";
peso = parseFloat(peso);
console.log(peso);

// Operações Matemáticas 

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));

console.log("Soma:", num1 + num2);
console.log("Subtração:", num1 - num2);
console.log("Multiplicação:", num1 * num2);
console.log("Divisão:", num1 / num2);


