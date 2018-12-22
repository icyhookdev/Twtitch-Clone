import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Header.module.css';
import GoogleAuth from '../GoogleAuth';
// import twitchLogo from '../../assets/images/Glitch_White_RGB.png';

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.header__brand}>
        {/* <img src={twitchLogo} alt="fail to load" /> */}
        <Link to="/" className={classes.item}>
          Streamy BC
        </Link>
      </div>
      <div className={classes.nav__items}>
        <Link to="" className={classes.item}>
          All Streams
        </Link>
        <GoogleAuth />
      </div>
    </div>
  );
};

export default Header;
