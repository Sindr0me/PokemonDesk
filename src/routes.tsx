import React from 'react';
import HomePage from './pages/Home';
import EmptyPage from './pages/NotFound';
import Pokedex from './pages/Pokedex';

interface IGeneralMenuItem {
  title: string;
  link: string;
  component: () => JSX.Element;
}
interface IAccMenu {
  [k: string]: () => JSX.Element;
}

export const GENERAL_MENU: IGeneralMenuItem[] = [
  {
    title: 'Home',
    link: '/home',
    component: () => <HomePage />,
  },
  {
    title: 'Pokédex',
    link: '/pokedex',
    component: () => <Pokedex />,
  },
  {
    title: 'Legendaries',
    link: '/legendaries',
    component: () => <EmptyPage />,
  },
  {
    title: 'Documentation',
    link: '/documentation',
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
