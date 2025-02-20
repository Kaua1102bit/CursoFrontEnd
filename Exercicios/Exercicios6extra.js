//jogo de adivinhação

let numeroSorteado = Math.floor(Math.random() * 10) + 1;
let palpite = parseInt(prompt('Adivinhe um número entre 1 e 10:'));
if (palpite === numeroSorteado) {
    console.log("Você acertou!");
} else {
    console.log(`Você errou! O número era ${numeroSorteado}`);
}

// calculadora de IMC

let pesoPessoa = parseFloat(prompt("Digite seu peso (kg):"));
let alturaPessoa = parseFloat(prompt("Digite sua altura (m):"));
let imc = pesoPessoa / (alturaPessoa * alturaPessoa);

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Peso normal");
} else if (imc >= 25 && imc <= 29.9) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}