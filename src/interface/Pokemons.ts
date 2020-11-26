/* eslint-disable no-eval */
export interface IPokemon {
  ['name_clean']: string;
  abilities: string[];
  stats: {
    hp: number;
    attack: number;
    defense: number;
    'special-attack': number;
    'special-defense': number;
    speed: number;
  };
  types: string[];
  img: string;
  name: string;
  ['base_experience']: 39;
  height: number;
  id: number;
  ['is_default']: boolean;
  order: number;
  weight: number;
}

export interface IPokemonsResponse {
  pokemons: IPokemon[];
  total: number;
}
