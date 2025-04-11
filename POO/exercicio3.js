

// Classe ContaBancaria
class ContaBancaria {
    constructor(titular, saldo) {
        this.titular = titular;
        this.saldo = saldo;
    }

    // Método para depositar valor
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`Depósito de R$${valor.toFixed(2)} realizado com sucesso.`);
        } else {
            console.log("O valor do depósito deve ser positivo.");
        }
    }

    // Método para sacar valor
    sacar(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente para realizar o saque.");
        } else if (valor > 0) {
            this.saldo -= valor;
            console.log(`Saque de R$${valor.toFixed(2)} realizado com sucesso.`);
        } else {
            console.log("O valor do saque deve ser positivo.");
        }
    }

    // Método para exibir o saldo atual
    exibirSaldo() {
        console.log(`Saldo atual: R$${this.saldo.toFixed(2)}`);
    }
}

// Criando uma conta bancária e testando os métodos
let conta1 = new ContaBancaria("João", 1000);

// Exibindo o saldo inicial
conta1.exibirSaldo();

// Realizando um depósito
conta1.depositar(500);

// Tentando sacar um valor maior que o saldo
conta1.sacar(2000);

// Realizando um saque válido
conta1.sacar(300);

// Exibindo o saldo final
conta1.exibirSaldo();