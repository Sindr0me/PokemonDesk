import React from 'react';
import s from './Heading.module.scss';

type HeaderType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface IHeadingProps {
  type: HeaderType;
  className?: string;
}

const Heading: React.FC<IHeadingProps> = ({ children, type, className }): JSX.Element => {
  return <>{React.createElement(type, { className: `${s.root} ${className}` }, children)}</>;
};

export default Heading;
