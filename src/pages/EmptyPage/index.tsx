import React from 'react';
import s from './EmptyPage.module.scss';

interface IEmptyPageProps {
  title: string;
}
const EmptyPage: React.FC<IEmptyPageProps> = ({ title }): JSX.Element => {
  return <div className={s.root}>Page {title} wasn&apos;t find</div>;
};

export default EmptyPage;
