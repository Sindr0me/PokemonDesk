import React from 'react';
import s from './Pokedex.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Layout from '../../components/Layout';

export const Pokedex = (): JSX.Element => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>pokedexpage</Layout>
      <Footer />
    </div>
  );
};
export default Pokedex;
