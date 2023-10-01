import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Pokemon} from "../interfaces/pokemon.interface";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private readonly http: HttpClient
  ) { }

  getPokemon(id: number) {
    return this.http.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
