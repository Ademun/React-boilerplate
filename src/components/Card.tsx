import React from 'react';
import { Mode } from '../data/modes';
import hard from '../images/icon.png';
import SurfaceStyled from '../styles/Surface.styled';
import { useTranslation } from 'react-i18next';

const Card = (props: Mode) => {
  const { t } = useTranslation();
  return (
    <SurfaceStyled>
      <img src={hard} alt='ico' />
      <div id='mode_info'>
        {props.name}
        <span>darkdustry.net:{props.port}</span>
      </div>
      <div className='description'>
        <span>{t(props.translator)}</span>
      </div>
    </SurfaceStyled>
  );
};

export default Card;
