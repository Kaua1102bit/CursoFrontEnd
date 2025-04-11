// Classe Usuario
class Usuario {
    // ATRIBUTOS PRIVADOS
    #marca;
    #modelo;
    #ano;

    constructor(marca, modelo, ano) {
        this.#marca = marca;
        this.#modelo = modelo;
        this.#ano = ano;
    }

    // Método get para acessar a marca
    getMarca() {
        return this.#marca;
    }
}

// Criando um objeto da classe Usuario
let user = new Usuario("Chevrolet", "Prisma", "2020");
console.log(user.getMarca()); // Acessa a marca usando o método get

// Herança
class Pessoa {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }

    exibirInfo() {
        console.log("Nome:", this.nome, "CPF:", this.cpf);
    }
}

class Aluno extends Pessoa {
    constructor(nome, cpf, matricula) {
        super(nome, cpf);
        this.matricula = matricula;
    }
}

// Classe Veiculo
class Veiculo {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }

    // Método para exibir informações do veículo
    exibirInfo() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}`);
    }
}

// Subclasse Carro que herda de Veiculo
class Carro extends Veiculo {
    constructor(marca, modelo, ano, quantidadePortas) {
        super(marca, modelo, ano); // Chama o construtor da classe pai
        this.quantidadePortas = quantidadePortas;
    }

    // Sobrescrevendo o método exibirInfo para incluir as portas
    exibirInfo() {
        console.log(`Marca: ${this.marca}, Modelo: ${this.modelo}, Ano: ${this.ano}, Portas: ${this.quantidadePortas}`);
    }
}

// Criando um objeto da classe Veiculo
let veiculo1 = new Veiculo("Toyota", "Corolla", 2020);
veiculo1.exibirInfo(); // Exibe informações do veículo

// Criando um objeto da subclasse Carro
let carro1 = new Carro("Honda", "Civic", 2022, 4);
carro1.exibirInfo(); // Exibe informações do carro, incluindo as portas