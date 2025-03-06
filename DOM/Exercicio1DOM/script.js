//exercicio 2 - a
function alterarTexto() {
    let titulo = document.getElementById('titulo');
    titulo.innerText = 'Cadastro Realizado';

    let paragrafo = document.querySelector('.paragrafo');
    paragrafo.innerText = 'Obrigado por se cadastrar!';

}
// 3 - a
function alterarCorFundo(){
   document.body.style.backgroundColor = "Blue";
}

// 4 - a
function adicionarClasse(){
    let titulo = document.getElementById('titulo');
    titulo.classList.add('descricao');
    titulo.style.color = "red"; // Adiciona a cor vermelha ao texto do título
}
