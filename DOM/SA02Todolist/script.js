//usar o DOM para adicionar um evento no HTML
document.getElementById("btnAdicionar").addEventListener("click", adicionarTarefa);
document.getElementById("btnMudarCor").addEventListener("click", mudarCorFundo); // Adiciona evento para o novo botão

function adicionarTarefa(){
    let input = document.getElementById("tarefa");
    let texto = input.value.trim();// pega o valor e recorta os espaços em branco

    if(texto === ""){ 
        return; // interrompe a function
    } 

    //continuar o código - se o texto não for "";
    let li = document.createElement("li"); // criando um elemento de lista
    li.innerHTML = texto + ' <button onclick="removerTarefa(this)">Remover</button>'; // criei o conteudo da LI

    let ul = document.getElementById("lista");
    ul.appendChild(li); // adicionar o item a lista    

    input.value = ""; // limpar o texto
}

//função do botão para remover o elemento pai(parent) (li)
function removerTarefa(botao) { 
    let li = botao.parentElement;
    li.remove();
}

function mudarCorFundo() {
    document.body.style.backgroundColor = "blue"; // Muda a cor do fundo para azul
}


