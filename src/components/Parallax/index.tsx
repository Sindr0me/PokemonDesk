import React, { useEffect, useState } from 'react';

import s from './Parallax.module.scss';

import SmallPokeBallPng from './Assets/PokeBall1.png';
import CloudPng from './Assets/Cloud1.png';
import PokeBallPng from './Assets/Pokeball2.png';
import CloudBigPng from './Assets/Cloud2.png';
import PikachuPng from './Assets/Pikachu.png';

const Parallax = () => {
  const [screenX, setScreenX] = useState(0);
  const [screenY, setScreenY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setScreenX(event.screenX);
      setScreenY(event.screenY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [screenX, screenY]);

  return (
    <div className={s.root}>
      <div className={s.smallPokeBall} style={{ transform: `translate(${screenY * 0.02}px, ${screenX * -0.03}px)` }}>
        <img src={SmallPokeBallPng} alt="Small PokeBall" />
      </div>
      <div className={s.cloud} style={{ transform: `translate(${screenY * 0.02}px, ${screenX * 0.04}px)` }}>
        <img src={CloudPng} alt="Cloud PokeBall" />
      </div>
      <div className={s.cloudBig} style={{ transform: `translate(${screenY * 0.03}px, ${screenX * 0.04}px)` }}>
        <img src={CloudBigPng} alt="Cloud Big PokeBall" />
      </div>
      <div className={s.pokeBall} style={{ transform: `translate(${screenY * -0.04}px, ${screenX * -0.03}px)` }}>
        <img src={PokeBallPng} alt="Big PokeBall" />
      </div>
      <div className={s.pikachu} style={{ transform: `translate(${screenY * 0.01}px, ${screenX * 0.01}px)` }}>
        <img src={PikachuPng} alt="Pikachu" />
      </div>
    </div>
  );
};

export default Parallax;