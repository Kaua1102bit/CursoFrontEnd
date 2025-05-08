import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  nome: string = '';
  email: string = '';
  telefone: string = '';
  genero: string = '';
  idade: number | null = null;
  profissao: string = '';

  limparCampos() {
    this.nome = '';
    this.email = '';
    this.telefone = '';
    this.genero = '';
    this.idade = null;
    this.profissao = '';
  }

  verificarCampos() {
    if (!this.nome || !this.email || !this.telefone || !this.genero || !this.idade || !this.profissao) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (!this.email.includes('@')) {
      alert('Por favor, insira um email válido.');
      return;
    }

    alert('Todos os campos estão preenchidos corretamente!');
  }
}
