import React from 'react';
import s from './Footer.module.scss';

const Footer = (): JSX.Element => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.footerItem}>
          <span>
            Make with{' '}
            <span role="img" aria-label="heart">
              ❤️
            </span>
          </span>
        </div>
        <div className={s.footerItem}>
          <span>Ours Team</span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
