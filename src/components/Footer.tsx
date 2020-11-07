import React from 'react';
import s from '../App.module.scss';

const Footer = (): JSX.Element => {
  return (
    <div className={s.footer}>
      <div className={s.fitem}>
        <span>Make with ❤</span>
      </div>
      <div className={s.fitem}>
        <span>Ours Team</span>
      </div>
    </div>
  );
};
export default Footer;
