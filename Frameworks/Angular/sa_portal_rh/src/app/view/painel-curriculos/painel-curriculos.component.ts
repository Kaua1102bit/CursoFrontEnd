import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculosService } from 'src/app/services/curriculos.service';

@Component({
  selector: 'app-painel-curriculos',
  templateUrl: './painel-curriculos.component.html',
  styleUrls: ['./painel-curriculos.component.scss']
})
export class PainelCurriculosComponent implements OnInit {
  public curriculo: Curriculo = new Curriculo(0, '', '', '', '');
  public curriculos: Curriculo[] = [];

  constructor(private _curriculosService: CurriculosService) {}

  ngOnInit(): void {
    this.listarCurriculos();
  }

  listarCurriculos() {
    this._curriculosService.getCurriculos().subscribe((retornaCurriculo) => {
      this.curriculos = retornaCurriculo.map((item) => {
        return new Curriculo(
          item.cpf,
          item.nome,
          item.email,
          item.formacao,
          item.experiencia
        );
      });
    });
  }

  cadastrar() {
    this._curriculosService.cadastrarCurriculo(this.curriculo).subscribe(() => {
      this.listarCurriculos();
      this.curriculo = new Curriculo(0, '', '', '', '');
    });
  }

  atualizar(cpf: any) {
    this._curriculosService.atualizarCurriculo(cpf, this.curriculo).subscribe(() => {
      this.listarCurriculos();
      this.curriculo = new Curriculo(0, '', '', '', '');
    });
  }

  excluir(cpf: any) {
    this._curriculosService.removerCurriculo(cpf).subscribe(() => {
      this.listarCurriculos();
    });
  }

  listarCurriculoUnico(curriculo: Curriculo) {
    this.curriculo = new Curriculo(
      curriculo.cpf,
      curriculo.nome,
      curriculo.email,
      curriculo.formacao,
      curriculo.experiencia
    );
  }
}
