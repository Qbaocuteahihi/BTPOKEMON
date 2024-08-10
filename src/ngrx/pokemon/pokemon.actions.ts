import {createAction, props} from "@ngrx/store";
import {PokemonDetailModel, PokemonModel} from "../../app/models/pokemon.model";


export const getPokemonList
  = createAction('[Pokemon] Get Pokemon List', props<{ gen: string }>());
export const getPokemonListSuccess
  = createAction('[Pokemon] Get Pokemon List Success', props<{
  pokemonList: PokemonModel[]
}>());
export const getPokemonListFailure
  = createAction('[Pokemon] Get Pokemon List Failure');

export const getPokemon
  = createAction('[Pokemon] Get Pokemon', props<{ name: string }>());
export const getPokemonSuccess
  = createAction('[Pokemon] Get Pokemon Success', props<{
  pokemon: PokemonDetailModel
}>());
export const getPokemonFailure
  = createAction('[Pokemon] Get Pokemon Failure');
