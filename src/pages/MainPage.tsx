import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import Card from '../components/Card';
import { modes } from '../data/modes';
import MainPageStyled from '../styles/MainPage.styled';

const MainPage = () => {
  const { t } = useTranslation();
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.scrollY);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MainPageStyled offsetY={offsetY}>
      <div className='intro'>
        Darkdustry
        <span>Mindustry v7 server</span>
        <a href='https://anuke.itch.io/mindustry'>{t('game_button')}</a>
      </div>
      <div className='modes_container'>
        <span className='about_us'>
          {t('about_us')}
          <br />
          <span>{t('about_us_text')}</span>
        </span>
        <div className='modes'>
          {modes.map(mode => (
            <Card key={mode.id} {...mode} />
          ))}
        </div>
      </div>
    </MainPageStyled>
  );
};

export default MainPage;
