import React from 'react';
import { navigate } from 'hookrouter';
import s from './NotFound.module.scss';
import Button from '../../components/Button';
import MainRoutes from '../../enums/MainRoutes';

const NotFound: React.FC = (): JSX.Element => {
  return (
    <div className={s.root}>
      <Button onClick={() => navigate(MainRoutes.HOME)}>Back</Button>
    </div>
  );
};
export default NotFound;
