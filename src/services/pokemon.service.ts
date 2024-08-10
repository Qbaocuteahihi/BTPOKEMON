import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PokemonDetailModel,PokemonModel} from "../app/models/pokemon.model";


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private httpClient: HttpClient) {
  }

  getPokemons(gen: string) {
    return this.httpClient.get<any>('https://pokeapi.co/api/v2/generation/generation-' + gen);
  }

  getPokemon(name: string) {
    return this.httpClient.get<any>("https://pokeapi.co/api/v2/pokemon/" + name);
  }
}
