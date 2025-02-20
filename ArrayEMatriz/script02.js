// Operações Avvançadas em Vetores (arrays)

//filtros

let numeros = [10, 20, 30, 40, 50];
let numMaior20 = numeros.filter(x => x > 20);
console.log (numMaior20);

//reduce 
let soma = numeros.reduce((acumulador, valorAtual) => acumulador +valorAtual,0);
console.log(soma); //150


//sort (organizador)

let aleatorio = [2, 5, 6, 3, 7, 8, 4, 9, 1, 0]
aleatorio.sort();
console.log(aleatorio);