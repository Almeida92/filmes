import { Filme } from './../../filme';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

  @Input() filme: Filme;

  constructor() { }

  ngOnInit() {
  }

}
