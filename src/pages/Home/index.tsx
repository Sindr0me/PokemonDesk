import React from 'react';
import { navigate } from 'hookrouter';
import s from './Home.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Button from '../../components/Button';
import Layout from '../../components/Layout';
import Heading from '../../components/Heading';
import Parallax from '../../components/Parallax';

const HomePage: React.FC = (): JSX.Element => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading type="h1" className={s.h1}>
            <strong>Find</strong> all your favorite <strong>Pokemon</strong>
          </Heading>
          <p className={s.subLabel}>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
          <Button onClick={() => navigate('/pokedex')}>See pokemons</Button>
        </div>
        <div className={s.contentParallax}>
          <Parallax />
        </div>
      </Layout>
      <Footer />
    </div>
  );
};
export default HomePage;
