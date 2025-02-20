// contador 1 ao 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// tabuada

let numeroTabuada = parseInt(prompt("Digite um número para a tabuada:"));
for (let i = 1; i <= 100; i++) {
    console.log(`${numeroTabuada} x ${i} = ${numeroTabuada * i}`);
}

// contagem regressiva 

let contagem = 10;
while (contagem > 0) {
    console.log(contagem);
    contagem--;
}
console.log('Feliz Ano Novo!');