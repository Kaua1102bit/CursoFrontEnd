// Exemplo de Script para a Manipulação DOM

function clickBtn(){
    //manipulação pelo ID - Variável Simples
    let titulo = document.getElementById('titulo');
    console.log(titulo);
    titulo.innerText = "Meu Título Modificado"; // Corrigido para innerText com "T" maiúsculo
    titulo.style.color = 'red'; // Adiciona a cor vermelha ao texto do título

    let li = document.createElement("li");
    let texto = "Modificado Texto do Título";
    li.innerHTML = texto + ' <button onclick="btnConfere(this)">Confere</button>';
    //querySelector -> Variável Simples
    document.querySelector('.lista').appendChild(li);

    //getElementsByClassName -> Vetor .descricao
    let descricao = document.getElementsByClassName('descricao');
    console.log(descricao);
    for (let i = 0; i < descricao.length; i++) {
        descricao[i].style.color = 'red'; // Adiciona a cor vermelha ao texto das descrições
    }

    texto = "Modificado Cor da Classe Descricao para Vermelho";
    li = document.createElement("li");
    li.innerHTML = texto + ' <button onclick="btnConfere(this)">Confere</button>';
    document.querySelector('.lista').appendChild(li);
}
