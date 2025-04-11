class Produto {
    // ATRIBUTOS PRIVADOS
    #nome;
    #preco;
    #estoque;

    constructor(nome, preco, estoque) {
        this.#nome = nome;
        this.#preco = preco;
        this.#estoque = estoque;
    }

    // Método GET para acessar o nome
    getNome() {
        return this.#nome;
    }

    // Método para vender (reduz o estoque)
    vender(quantidade) {
        if (quantidade > this.#estoque) {
            console.log("Estoque insuficiente!");
        } else {
            this.#estoque -= quantidade;
            console.log(`${quantidade} unidade(s) vendida(s). Estoque atual: ${this.#estoque}`);
        }
    }

    // Método para repor (aumenta o estoque)
    repor(quantidade) {
        this.#estoque += quantidade;
        console.log(`${quantidade} unidade(s) adicionada(s). Estoque atual: ${this.#estoque}`);
    }

    // Método para exibir informações do produto
    exibirInfo() {
        console.log(`Nome: ${this.#nome}, Preço: R$${this.#preco.toFixed(2)}, Estoque: ${this.#estoque}`);
    }
}

// Criando um produto e testando os métodos
let produto1 = new Produto("Caixa", 120.00, 130);

// Exibindo informações do produto
produto1.exibirInfo();

// Vendendo 10 unidades
produto1.vender(10);

// Repondo 20 unidades
produto1.repor(20);

// Exibindo informações atualizadas
produto1.exibirInfo();