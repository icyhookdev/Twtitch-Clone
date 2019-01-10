import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Header.module.css';
import GoogleAuth from '../GoogleAuth';

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.header__brand}>
        <Link to="/" className={classes.item}>
          Streamify
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
