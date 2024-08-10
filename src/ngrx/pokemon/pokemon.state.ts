import {PokemonDetailModel, PokemonModel} from "../../app/models/pokemon.model";


export interface PokemonState {
  pokemonList: PokemonModel[];
  isLoadingList: boolean;
  listError: string;

  pokemonDetailList: PokemonDetailModel[];
  isLoadingDetailList: boolean;
  detailListError: string;
}
