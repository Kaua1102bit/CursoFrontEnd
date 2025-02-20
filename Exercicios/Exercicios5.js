// criando função

function boasVindas(nome) {
    return 'Olá, ${nome}! Seja bem-vindo(a)!';
}
console.log(boasVindas("Yuri"));

// calculadora

const prompt = require("prompt-sync")();


//funções - Operações
//soma
function soma(a, b){
    return (a+b);
}
//subtração
function sub(a,b){
    return (a-b);
}
//multiplicação
function multi(a,b){
    return (a*b);
}
//divisão
function div(a,b){
    return (a/b);
}
//menu Operações
function menuOperacoes(){
    console.log("===Calculadora Simples===");
    console.log("| 1. Soma               |");
    console.log("| 2. Subtração          |");
    console.log("| 3. Multiplicação      |");
    console.log("| 4. Divisão            |");
    console.log("=========================");
    let operacao = prompt("Escolha a Operação Desejada: ");
    //entrada dos nºs
    let numero1 = Number(prompt("Digite nº 1: "));
    let numero2 = Number(prompt("Digite nº 2: "));
    let resultado;
    //condicional
    switch (operacao) {
        case "1":
            resultado = soma(numero1,numero2);
            break;
        case "2":
            resultado = sub(numero1,numero2);
            break;
            case "3":
            resultado = multi(numero1,numero2);
            break;
        case "4":
            if(numero2==0){
                console.log("Não Dividirás por Zero!!!");
                resultado = null;
            }else{
                resultado=div(numero1,numero2);
            }
            break;
            default:
                console.log("Operação Inválida")
                break;
        }//fim switch
        console.log ("Resultado: "+resultado);
    }    

// média de notas

function mediaNotas(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3;
    if (media >= 7) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}
console.log(mediaNotas(7, 8, 9));