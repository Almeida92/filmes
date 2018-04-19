import { FilmeService } from './../filme.service';
import { Filme } from './../filme';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit {

  filmes: Filme[] = null;

  constructor(
    private filmeService: FilmeService
  ) { }

  ngOnInit() {
    this.filmes = this.filmeService.getFilmes();
  }

  apagaFilme(id: string) {
    this.filmes = this.filmes.filter(filme => filme.id != id);
  }

}
