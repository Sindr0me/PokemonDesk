import React from 'react';
import { navigate } from 'hookrouter';
import s from './NotFound.module.scss';
import Button from '../../components/Button';
import { ROUTE } from '../../routes';

const NotFound: React.FC = (): JSX.Element => {
  return (
    <div className={s.root}>
      <Button onClick={() => navigate(ROUTE.HOME)}>Back</Button>
    </div>
  );
};
export default NotFound;
