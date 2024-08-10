import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {delay, EMPTY, mergeMap, of, switchMap} from 'rxjs';
import {map, exhaustMap, catchError} from 'rxjs/operators';
import {PokemonService} from "../../services/pokemon.service";
import * as PokemonActions from './pokemon.actions';

@Injectable()
export class PokemonEffects {

  getPokemonList$ = createEffect(() => this.actions$.pipe(
      ofType(PokemonActions.getPokemonList),
      switchMap((action) => this.pokemonService.getPokemons(action.gen)
        .pipe(
          delay(2000),
          map(pokemons => {
            console.log(pokemons);
            let pokemonList = pokemons.pokemon_species.map((pokemon: any) => {
              return {
                name: pokemon.name,
              }
            })
            return PokemonActions.getPokemonListSuccess({pokemonList});
          }),
          catchError(() => {
            return of(PokemonActions.getPokemonListFailure());
          })
        ))
    )
  );

  getPokemon$ = createEffect(() => this.actions$.pipe(
      ofType(PokemonActions.getPokemon),
      mergeMap((action) => this.pokemonService.getPokemon(action.name)
        .pipe(
          delay(2000),
          map(pokemon => {
            return PokemonActions.getPokemonSuccess({pokemon});
          }),
          catchError(() => {
            return of(PokemonActions.getPokemonFailure());
          })
        ))
    )
  );

  constructor(
    private actions$: Actions,
    private pokemonService: PokemonService
  ) {
  }
}
