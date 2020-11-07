import React from 'react';
import s from '../App.module.scss';

export const Header = (): JSX.Element => {
  return (
    <div className={s.header}>
      <div className={s.logo}>logo</div>
      <nav className={s.menu}>
        <span>Home</span>
        <span>Pokédex</span>
        <span>Legendaries</span>
        <span>Documentation</span>
      </nav>
    </div>
  );
};
export default Header;
