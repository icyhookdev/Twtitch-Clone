import React from 'react';

import classes from './Input.module.css';

const Input = ({ type, name, placeHolder, value, change }) => (
  <input
    className={classes.input}
    type={type}
    name={name}
    placeholder={placeHolder}
    value={value}
    onChange={change}
  />
);

export default Input;
