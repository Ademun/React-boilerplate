import React from 'react';
import { Link } from 'react-router-dom';
import AppBarStyled from '../styles/AppBar.styled';
import { useTranslation } from 'react-i18next';
import { FaDiscord, FaGithub } from 'react-icons/fa';

const AppBar = () => {
  const { t, i18n } = useTranslation();
  const handleClick = () => {
    i18n.language === 'ru'
      ? i18n.changeLanguage('en')
      : i18n.changeLanguage('ru');
  };
  return (
    <AppBarStyled>
      <Link to='/'>
        Darkdustry <span>| darkdustry.net</span>
      </Link>
      <div className='inner_links'>
        <Link to='tournament' className='link'>
          {t('tournament_link')}
        </Link>
        <Link to='leaderboard' className='link'>
          {t('leaderboard_link')}
        </Link>
      </div>
      <div className='outer_links'>
        <a className='link' href='https://discord.gg/W8FjQXSDXR'>
          <FaDiscord />
        </a>
        <a className='link' href='https://github.com/Darkdustry-Coders'>
          <FaGithub />
        </a>
      </div>
      <button onClick={handleClick}>{i18n.language.toLocaleUpperCase()}</button>
    </AppBarStyled>
  );
};

export default AppBar;
