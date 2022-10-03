import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import {RickAndMorty, Result } from '../models/rickandmorty.model';


@Injectable({
  providedIn: 'root'
})
export class ElementService {

  //private apiUrl = environment.API_URL;
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(
    private http: HttpClient
  ) { }

    //metodo para obtener todos los personajes
    getAllCharacters() {
      return this.http.get<RickAndMorty>(this.apiUrl);
    }
    //metodo para obtener un personaje
    getOneCharacter(id: number) {
      return this.http.get(`${this.apiUrl}/${id}`);
    }
}
