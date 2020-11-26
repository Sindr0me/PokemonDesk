import React, { useState } from 'react';
import s from './Pokedex.module.scss';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';
import useData from '../../hook/getData';
import useDebounce from '../../hook/useDebounce';
import { IPokemonsResponse } from '../../interface/Pokemons';

interface IQuery {
  name?: string;
}

const Pokedex: React.FC = (): JSX.Element => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<IQuery>({});
  const debouncedValue = useDebounce(searchValue, 500);
  const method = 'getPokemons';
  const { data, isError, isLoading } = useData<IPokemonsResponse>(method, query, [method, debouncedValue]);
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
