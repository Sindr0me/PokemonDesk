import React from 'react';
import useData from '../../hook/getData';
import { IPokemon } from '../../interface/Pokemons';

export interface IPokemonProps {
  id: string | number;
}

const Pokemon: React.FC<IPokemonProps> = ({ id }): JSX.Element => {
  const { data } = useData<IPokemon>('getPokemon', { id }, [id]);

  return <div>{data?.name}</div>;
};
export default Pokemon;
