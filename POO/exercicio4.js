

// Classe Funcionario
class Funcionario {
    constructor(nome, salario, cargo) {
        this.nome = nome;
        this.salario = salario;
        this.cargo = cargo;
    }

    // Méctodo para aumentar o salário com base no percentual
    aumentarSalario(percentual) {
        if (percentual > 0) {
            this.salario += this.salario * (percentual / 100);
            console.log(`Salário aumentado em ${percentual}%. Novo salário: R$${this.salario.toFixed(2)}`);
        } else {
            console.log("O percentual de aumento deve ser positivo.");
        }
    }

    // Método para exibir informações do funcionário
    exibirInfo() {
        console.log(`Nome: ${this.nome}, Salário: R$${this.salario.toFixed(2)}, Cargo: ${this.cargo}`);
    }
}

// Criando um funcionário e testando os métodos
let funcionario1 = new Funcionario("Carlos", 3000, "Desenvolvedor");

// Exibindo informações iniciais do funcionário
funcionario1.exibirInfo();

// Aumentando o salário em 10%
funcionario1.aumentarSalario(10);

// Exibindo informações atualizadas do funcionário
funcionario1.exibirInfo();