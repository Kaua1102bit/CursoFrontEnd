// array e matrizes

// declaração de um array
let dados = []; // uso de colchetes permite a declaração de um array

let numeros = [1,2,3,4,5,6,7,8,9];
let palavras = ["Bola", "Sapato", "Caixa"];

console.log(numeros.length); //quantidade de elementos do array

//índices do array

//imprimir o 5º elemento de um array
console.log(numeros[4]); // 5º elemento

//adicionar elementos em um array

palavras.push("Cachorro"); // no final do array
console.log(palavras);

palavras.unshift("Prédio"); // no começo do array
console.log(palavras);

// remover elementos
palavras.pop(); // remove o último elemento
console.log(palavras);

palavras.shift(); // remove o primeiro elemento
console.log(palavras);

//ForEach - repetição em um vetor 
palavras.forEach(palavra => {
    console.log(palavra);
});

// Splice 
// remove pelo índice
palavras.splice(1,1); // remover "Sapato"
console.log(palavras);

//manipulação de arrays
let numerosDobro = numeros.map(x => x*10);
console.log(numerosDobro);

