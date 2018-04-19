import { FilmeService } from './../filme.service';
import { Filme } from './../filme';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-filmes',
  templateUrl: './lista-filmes.component.html',
  styleUrls: ['./lista-filmes.component.css']
})
export class ListaFilmesComponent implements OnInit {

  filmes: Filme[] = [];

  constructor(
    private filmeService: FilmeService
  ) { }

  ngOnInit() {
    this.filmeService.getFilmes()
      .subscribe(data => {
        data['Search'].map(filme => {
          let film = {
            'id': filme.imdbID,
            'titulo': filme.Title,
            'ano': filme.Year,
            'tipo': filme.Type,
            'poster': filme.Poster
          };
          this.filmes.push(film);
        });
      });
  }

  apagaFilme(id: string) {
    this.filmes = this.filmes.filter(filme => filme.id != id);
  }

}
