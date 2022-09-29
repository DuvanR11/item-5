import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from '../interfaces/marvel.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiMarvelService {
  PUBLIC_KEY = 'b697e32cf047362dded9ac21bdea4113';
  HASH = '7b5930abc366cf5e322a9d9f28e1feb0';
  id = ''
  URL_API = `https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;
  URL_BASE = 'https://gateway.marvel.com/v1/public/characters'
  constructor(private http: HttpClient) { }

  getAllCharactersMarvel(): Observable<Result[]> {
    return this.http.get<Result>(this.URL_API)
    .pipe(map((data: any)=> data.data.results))
  }

  getCharacter(id: number): Observable<Result>{
    console.log("marvel: " + this.http.get(this.URL_BASE + '/' ))
    return this.http.get(this.URL_BASE + '/' + id + `?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`)
    .pipe(map((data: any)=> data.data.results[0]))
  }
}
