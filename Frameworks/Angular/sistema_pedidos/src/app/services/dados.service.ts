import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';
import { Produto } from '../models/produto.model';
import { Pedido } from '../models/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class DadosService {
  private baseUrl = 'http:/localhost:3000'; // endereço da API backend
  
  constructor(private http: HttpClient) { }

   //métodos de conexão com o backend
// get
  getClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.baseUrl}/clientes`); // usa o método get do HTTP client(metodo de conexão com backend) para fazer solicitações
    // me retorna uma lista de clientes
  }
// post
  adicionarCliente(Cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${this.baseUrl}/clientes`,Cliente);
  } 

  // produtos 
  //get
  getProdutos(): Observable<Produto[]>{
    return this.http.get<Produto[]>(`${this.baseUrl}/produtos`); 
  }
  // post
  adicionarProduto(Produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(`${this.baseUrl}/produtos`,Produto);
  }
  // pedido
    getPedido(): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(`${this.baseUrl}/pedidos`); 
  }
  // post
  adicionarPedido(Pedido: Pedido): Observable<Pedido>{
    return this.http.post<Pedido>(`${this.baseUrl}/pedidos`,Pedido);
  }
}