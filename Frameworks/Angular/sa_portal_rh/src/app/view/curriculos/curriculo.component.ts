import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculosService } from 'src/app/services/curriculos.service';

@Component({
  selector: 'app-curriculo',
  templateUrl: './curriculo.component.html',
  styleUrls: ['./curriculo.component.scss']
})
export class CurriculoComponent implements OnInit {
  public curriculos: Curriculo[] = [];
  public curriculo: Curriculo = new Curriculo(0, '', '', '', '', '', '');

  constructor(private _curriculoService: CurriculosService) {}

  ngOnInit(): void {
    this.listarCurriculos();
  }

  listarCurriculos() {
    this._curriculoService.getCurriculos().subscribe(
      (retornaCurriculo) => {
        this.curriculos = retornaCurriculo.map(
          (item) => {
            return new Curriculo(
              item.cpf,
              item.nome,
              item.formacao,
              item.experiencia,
              item.habilidades || '',
              item.linkedin || ''
            );
          }
        );
      }
    );
  }

  cadastrarCurriculo() {
    this._curriculoService.cadastrarCurriculo(this.curriculo).subscribe(() => {
      this.listarCurriculos();
      this.curriculo = new Curriculo(0, '', '', '', '', '', '');
    });
  }

  editarCurriculo(curriculo: Curriculo) {
    this.curriculo = Object.assign({}, curriculo);
  }

  atualizarCurriculo(curriculo: Curriculo) {
    this._curriculoService.atualizarCurriculo(curriculo.cpf, curriculo).subscribe(() => {
      this.listarCurriculos();
      this.curriculo = new Curriculo(0, '', '', '', '', '', '');
    });
  }

  removerCurriculo(cpf: number) {
    this._curriculoService.removerCurriculo(cpf).subscribe(() => {
      this.listarCurriculos();
    });
  }
}
