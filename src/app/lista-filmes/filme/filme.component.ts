import { Filme } from './../../filme';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

  @Input() filme: Filme;
  @Output() apaga = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  apagaFilme(id: string) {
    this.apaga.emit(this.filme.id);
  }

}
