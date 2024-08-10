export interface PokemonModel {
  name: string;
}

export interface PokemonDetailModel {
  name: string;
  sprites: {
    front_default: string;
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  weight: number;
  height: number;
  base_experience: number;
  order: number;
}
