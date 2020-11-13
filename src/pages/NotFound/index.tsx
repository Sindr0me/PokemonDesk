import React from 'react';
import { navigate } from 'hookrouter';
import s from './NotFound.module.scss';
import Button from '../../components/Button';

const NotFound: React.FC = (): JSX.Element => {
  return (
    <div className={s.root}>
      <Button onClick={() => navigate('/home')}>See pokemons</Button>
    </div>
  );
};
export default NotFound;
