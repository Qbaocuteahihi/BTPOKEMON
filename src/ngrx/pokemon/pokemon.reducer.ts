import {PokemonState} from "./pokemon.state";
import {createReducer, on} from "@ngrx/store";
import * as PokemonActions from "./pokemon.actions";
import {getPokemonList} from "./pokemon.actions";

const initialState: PokemonState = {
  pokemonList: [],
  isLoadingList: false,
  listError: '',
  pokemonDetailList: [],
  isLoadingDetailList: false,
  detailListError: ''
}

export const pokemonReducer = createReducer(
  initialState,
  on(PokemonActions.getPokemonList, (state, action) => {
    console.log(action.type)
    return <PokemonState>{
      ...state,
      isLoadingList: true
    }
  }),
  on(PokemonActions.getPokemonListSuccess, (state, action) => {
    console.log(action.type)
    return <PokemonState>{
      ...state,
      isLoadingList: false,
      pokemonList: action.pokemonList
    }
  }),
  on(PokemonActions.getPokemonListFailure, (state, action) => {
    console.log(action.type)
    return <PokemonState>{
      ...state,
      isLoading: false,
      error: 'Error loading pokemon list'
    }
  }),

  on(PokemonActions.getPokemon, (state, action) => {
    console.log(action.type)
    return <PokemonState>{
      ...state,
      isLoadingDetailList: true
    }
  }),
  on(PokemonActions.getPokemonSuccess, (state, action) => {
    console.log(action.type)
    return <PokemonState>{
      ...state,
      isLoadingDetailList: false,
      pokemonDetailList: [...state.pokemonDetailList,action.pokemon]
    }
  }),
  on(PokemonActions.getPokemonFailure, (state, action) => {
    console.log(action.type)
    return <PokemonState>{
      ...state,
      isLoadingDetailList: false,
      detailListError: 'Error loading pokemon detail list'
    }
  })
)
