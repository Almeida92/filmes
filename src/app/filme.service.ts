import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class FilmeService {

  url: string = 'http://www.omdbapi.com/?s=Batman&page=2&apikey=86740000';

  constructor(
    private http: HttpClient
  ) { }

  getFilmes() {
    return this.http.get(this.url);
  }

}
