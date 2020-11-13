import React from 'react';
import s from './PokemonCard.module.scss';
import Heading from '../Heading';

interface IPokemonCard {
  nameClean?: string;
  abilities?: string[];
  stats?: {
    hp?: number;
    attack?: number;
    defense?: number;
    specialAttack?: number;
    specialDefense?: number;
    speed?: number;
  };
  types?: string[];
  img?: string;
  name?: string;
  baseExperience?: number;
  height?: number;
  id?: number;
  isDefault?: boolean;
  order?: number;
  weight?: number;
}

const PokemonCard: React.FC<IPokemonCard> = ({ stats, types, img, nameClean, name }): JSX.Element => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading type="h3" className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats?.attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{stats?.defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types?.map((type) => (
            <span className={s.label}>{type}</span>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={img} alt={nameClean} />
      </div>
    </div>
  );
};

export default PokemonCard;
