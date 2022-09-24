import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Element } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ElementService {

  //private apiUrl = environment.API_URL;

  constructor(
    private http: HttpClient
  ) { }


    getAllElement() {
      return this.http.get<Element[]>('https://rickandmortyapi.com/api/character');
    }
}
