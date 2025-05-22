import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './view/inicio/inicio.component';

import { VagasComponent } from './view/vagas/vagas.component'; // Verifique se o caminho está correto
import { CurriculoComponent } from './view/curriculos/curriculo.component';

const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "curriculos", component:CurriculoComponent},
  {path: "vagas", component: VagasComponent} // Certifique-se de que o componente está correto
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
