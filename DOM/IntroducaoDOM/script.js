function alterarTexto() {
    document.getElementById("titulo").innerText = "Texto Alterado!";
}

//getElementById - seleção do elementos pelo ID
let Titulo = document.getElementById("Titulo");
//variavel comum
titulo.style.color = "blue";

//getElementysByClassName -> vetor
let descricao = document.getElementsByClassName("descricao");
descricao[1].style.fontWeight = "bold"; 
descricao[2].style.color = "green"; 

//getElementsByTagName -> vetor
let todosParagrafos = document.getElementsByTagName("p");
console.log(todosParagrafos.length); 

//querySelector -> Primeiro Elemento ->comum
let primeiroDescricao = document.querySelector(".descricao");
primeiroDescricao.style.color = "red";

//querySelectorAll -> Todos Elementos -> Vetor
let ps = document.querySelectorAll("P");
ps.forEach(p => p.style.fontSize = "18px");

