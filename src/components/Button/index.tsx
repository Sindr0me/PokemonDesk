import React from 'react';
import cn from 'classnames';
import s from './Button.module.scss';

type ButtonColor = 'yellow' | 'green' | 'blue';
type ButtonSize = 'small' | 'default';

interface IButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isFullWidth?: boolean;
  color?: ButtonColor;
  size?: ButtonSize;
}

const Button: React.FC<IButtonProps> = ({
  children,
  onClick,
  isFullWidth = false,
  color = 'green',
  size = 'default',
}): JSX.Element => {
  return (
    <button
      className={cn(s.root, [s[color]], [s[size]], {
        [s.fullWidth]: isFullWidth,
      })}
      onClick={onClick}
      type="button">
      {children}
    </button>
  );
};

export default Button;
