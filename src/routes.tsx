import React, { PropsWithChildren } from 'react';
import HomePage from './pages/Home';
import EmptyPage from './pages/NotFound';
import Pokedex from './pages/Pokedex';
import MainRoutes from './enums/MainRoutes';
import Pokemon, { IPokemonProps } from './pages/Pokemon';

interface IGeneralMenuItem {
  title: string;
  link: MainRoutes;
  component: (props: PropsWithChildren<any>) => JSX.Element;
}

interface IAccMenu {
  [k: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

export const GENERAL_MENU: IGeneralMenuItem[] = [
  {
    title: 'Home',
    link: MainRoutes.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: MainRoutes.POKEDEX,
    component: () => <Pokedex />,
  },
  {
    title: 'Legendaries',
    link: MainRoutes.LEGENDARIES,
    component: () => <EmptyPage />,
  },
  {
    title: 'Documentation',
    link: MainRoutes.DOCUMENTATION,
    component: () => <EmptyPage />,
  },
];

const SECONDARY_ROUTES: IGeneralMenuItem[] = [
  {
    title: 'Pokemon',
    link: MainRoutes.POKEMON,
    component: ({ id }: IPokemonProps) => <Pokemon id={id} />,
  },
];

const routes = [...SECONDARY_ROUTES, ...GENERAL_MENU].reduce(
  (acc: IAccMenu, item) => {
    acc[item.link] = item.component;
    return acc;
  },
  { '/': () => <HomePage /> },
);

export default routes;
