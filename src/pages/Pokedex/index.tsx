import React, { useState } from 'react';
import s from './Pokedex.module.scss';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';
import useData from '../../hook/getData';

interface IPokemon {
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

interface IPokemonsResponse {
  pokemons: IPokemon[];
  total: number;
}

const Pokedex = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<object>({});
  const method = 'getPokemons';
  const { data, isError, isLoading } = useData<IPokemonsResponse>(method, query, [searchValue, method]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((prevState) => ({ ...prevState, name: e.target.value }));
  };

  if (isError) return <Layout className={s.contentWrap}>Error</Layout>;
  if (isLoading) return <Layout className={s.contentWrap}>Loading</Layout>;

  return (
    <div className={s.root}>
      <Layout className={s.contentWrap}>
        <div className={s.pokemonTotal}>
          <Heading className={s.totalPokemonsHeader} type="h1">
            {data?.total} <strong>Pokemons</strong> for you to choose your favorite
          </Heading>
        </div>

        <div>
          <input type="text" value={searchValue} onChange={handleSearchChange} />
        </div>

        <div className={s.pokemonCardsWrap}>
          <div className={s.pokemonCards}>
            {data?.pokemons.map(({ stats, is_default: isDefault, types, id, name_clean: nameClean, name, img }) => {
              return (
                <PokemonCard
                  key={id}
                  stats={stats}
                  isDefault={isDefault}
                  types={types}
                  nameClean={nameClean}
                  name={name}
                  img={img}
                />
              );
            })}
          </div>
        </div>
      </Layout>
      <Footer />
    </div>
  );
};
export default Pokedex;
