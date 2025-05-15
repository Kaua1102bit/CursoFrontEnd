import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { ItemPedido, Pedido } from 'src/app/models/pedido.model';
import { Produto } from 'src/app/models/produto.model';
import { DadosService } from 'src/app/services/dados.service';

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.scss']
})
export class PedidoFormComponent implements OnInit{ // implementa a interface OnInit
  //importa o OnInit do angular core
  //atributos
  clientes: Cliente[] = []; // lista de clientes
  produtos: Produto[] = []; // lista de produtos
  clienteID = ""; // id do cliente
  desconto = 0; // calcula o desconto do pedido
  itens: ItemPedido[] = []; // lista de itens do pedido

 constructor(private dadosService: DadosService){} // injeta o serviço de dados
  
  ngOnInit(): void{ // vai aconter ao iniciar o site
    this.dadosService.getClientes().subscribe(c => this.clientes = c);
    this.dadosService.getProdutos().subscribe(p => {// pega os produtos do serviço de dados
      this.produtos = p; // pega os produtos do serviço de dados
      this.itens=p.map(prod => ({ produtoID:prod.id, quantidade: 0 })); // mapeia os produtos para os itens do pedido
    });
  }

  salvarPedido(){ // salva o pedido
    const cliente = this.clientes.find(c => c.id.toString() === this.clienteID);
    if(!cliente)return; // se não encontrar o cliente, retorna
    
    const itensSelecionados = this.itens.filter(i=>i.quantidade > 0);
    const pedido = new Pedido(this.dadosService.getPedido.length +1, cliente,itensSelecionados,this.desconto);
    this.dadosService.adicionarPedido(pedido).subscribe(); // adiciona o pedido ao serviço de dados

    //limpar os campos
    this.clienteID=""; // limpa o id do cliente
    this.desconto = 0; // limpa o desconto
    this.itens.forEach(i => i.quantidade = 0); // limpa a quantidade dos itens
  }
}
