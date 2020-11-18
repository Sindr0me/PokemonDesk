import React from 'react';
import HomePage from './pages/Home';
import EmptyPage from './pages/NotFound';
import Pokedex from './pages/Pokedex';

// eslint-disable-next-line no-shadow
export enum ROUTE {
  HOME = '/home',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
}

interface IGeneralMenuItem {
  title: string;
  link: ROUTE;
  component: () => JSX.Element;
}
interface IAccMenu {
  [k: string]: () => JSX.Element;
}

export const GENERAL_MENU: IGeneralMenuItem[] = [
  {
    title: 'Home',
    link: ROUTE.HOME,
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: ROUTE.POKEDEX,
    component: () => <Pokedex />,
  },
  {
    title: 'Legendaries',
    link: ROUTE.LEGENDARIES,
    component: () => <EmptyPage />,
  },
  {
    title: 'Documentation',
    link: ROUTE.DOCUMENTATION,
    component: () => <EmptyPage />,
  },
];

const routes = GENERAL_MENU.reduce(
  (acc: IAccMenu, item) => {
    acc[item.link] = item.component;
    return acc;
  },
  { '/': () => <HomePage /> },
);

export default routes;
