import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { IDatos } from '../interfaces/datos.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  URL_API = `https://rickandmortyapi.com/api/character/`

  constructor(private http: HttpClient) { }

  getAllCharacters(): Observable<IDatos> {
    console.log("categorias: " + this.http.get(this.URL_API))
    return this.http.get<IDatos>(this.URL_API).pipe(map((data: any) => data.results))
  }

  getCharacter(id: number): Observable<any>{
    console.log("categorias: " + this.http.get(this.URL_API+"/"+id ))
    return this.http.get(this.URL_API+"/"+id)
  }
}
