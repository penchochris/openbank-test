import React from 'react';
import './ButtonCustom.scss'
const ButtonCustom = ({
  color,
  background,
  text,
  iconComponent,
  handleOnClick,
}) => {
  const backgroundClasses = {
    primary: 'button-custom__background-primary',
    secondary: 'button-custom__background-secondary',
    terciary: 'button-custom__background-terciary',
    white: 'button-custom__background-white',
  };
  const colorClasses = {
    primary: 'button-custom__color-primary',
    secondary: 'button-custom__color-secondary',
    terciary: 'button-custom__color-terciary',
    white: 'button-custom__color-white',
  };

  return (
    <button onClick={handleOnClick} className={`button-custom ${backgroundClasses[background]} ${colorClasses[color]}`}>
      <p>{text}</p>
      <span className="button-custom__icon">{iconComponent}</span>
    </button>
  );
}

export default ButtonCustom;