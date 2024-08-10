import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

import {Store} from "@ngrx/store";
import {PokemonState} from "../ngrx/pokemon/pokemon.state";
import * as PokemonActions from "../ngrx/pokemon/pokemon.actions";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {AsyncPipe} from "@angular/common";
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {PokemonModel} from "./models/pokemon.model";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatProgressSpinnerModule, AsyncPipe, MatButtonModule, MatCardModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ngredux';

  isLoadingList$ = this.store.select('pokemon', 'isLoadingList');

  pokemonList$ = this.store.select('pokemon', 'pokemonList');

  pokemonDetailList$ = this.store.select('pokemon', 'pokemonDetailList');

  pokemonList: PokemonModel[] = [];

  constructor(private store: Store<{ pokemon: PokemonState }>) {
    this.store.dispatch(PokemonActions.getPokemonList({gen: 'ii'}));


    this.pokemonList$.subscribe((pokemonList) => {
      pokemonList.forEach((pokemon) => {
        this.store.dispatch(PokemonActions.getPokemon({name: pokemon.name}));
      })
    });

  }
}
