import React from 'react';
import cn from 'classnames';
import { A, usePath } from 'hookrouter';
import s from './Header.module.scss';
import { ReactComponent as PokemonLogo } from './Assets/Logo.svg';
import { GENERAL_MENU } from '../../routes';

export const Header = (): JSX.Element => {
  const path = usePath();
  const comparablePathName = path === '/' ? '/home' : path;

  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.pokemonLogo}>
          <PokemonLogo />
        </div>
        <nav className={s.menuWrap}>
          {GENERAL_MENU.map(({ title, link }) => {
            return (
              <A
                href={link}
                key={title}
                className={cn(s.menuItem, {
                  [s.activeItem]: comparablePathName === link,
                })}>
                {title}
              </A>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
export default React.memo(Header);
