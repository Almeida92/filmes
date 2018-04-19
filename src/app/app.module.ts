import { FilmeService } from './filme.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { FilmeComponent } from './lista-filmes/filme/filme.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaFilmesComponent,
    FilmeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    FilmeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
