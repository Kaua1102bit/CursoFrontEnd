import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './template/header/header.component';
import { FooterComponent } from './template/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './view/inicio/inicio.component';
import { VagasComponent } from './view/vagas/vagas.component';
import { HttpClientModule} from '@angular/common/http';
import { PainelVagasComponent } from './view/painel-vagas/painel-vagas.component';
import { FormsModule } from '@angular/forms';
import { CurriculoComponent } from './view/curriculos/curriculo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    VagasComponent,
    PainelVagasComponent,
    CurriculoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }      