import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './view/inicio/inicio.component';
import { VagasComponent } from './view/vagas/vagas.component'; // Verifique se o caminho está correto
import { CurriculoComponent } from './view/curriculos/curriculo.component';
import { PainelVagasComponent } from './view/painel-vagas/painel-vagas.component';

const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "curriculos", component: CurriculoComponent},
  {path: "curriculos/novo", component: CurriculoComponent},
  {path: "curriculos/editar/:id", component: CurriculoComponent},
  {path: "meu-curriculo", component: CurriculoComponent},
  {path: "vagas", component: VagasComponent}, // Certifique-se de que o componente está correto
  {path: "vaga-listar", component: PainelVagasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
