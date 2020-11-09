import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import cn from 'classnames';
import s from './Header.module.scss';
import { ReactComponent as PokemonLogo } from './Assets/Logo.svg';

interface IMenuItem {
  id: number;
  value: string;
  link: string;
}
const MENU: IMenuItem[] = [
  {
    id: 1,
    value: 'Home',
    link: '/home',
  },
  {
    id: 2,
    value: 'Pokédex',
    link: '/pokedex',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '/',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '/',
  },
];

export const Header = (): JSX.Element => {
  const { pathname } = useLocation();
  const comparablePathName = pathname === '/' ? '/home' : pathname;

  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <PokemonLogo />
        </div>
        <nav className={s.menuWrap}>
          {MENU.map(({ id, value, link }) => {
            return (
              <Link
                to={link}
                key={id}
                className={cn(s.menuItem, {
                  [s.activeItem]: comparablePathName === link,
                })}>
                {value}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
export default Header;
