import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import maYuanImage from '../assets/ma-yuan.jpg';
import breigelImage from '../assets/breigel.jpg';
import assaImage from '../assets/assa.png';

function Header(props) {
  const images = {
    'ma-yuan.jpg': maYuanImage,
    'breigel.jpg': breigelImage,
    'assa.png': assaImage,
  };

  return (
    <header className='header'>
      <div className='image__container'>
        <img src={images[props.image]} className='header__image' />
        <div className='image__text' style={{backgroundColor: props.isWhite ? 'rgba(0, 0, 0, .7)' : 'rgba(0, 0, 0, .3)'}}>
          <h2 className='image__title'>{props.title}</h2>
          <h3 className='image__subtitle'>{props.subtitle}</h3>
          <Link to={props.link}> <button className='image__button'>
            Learn more
          </button></Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
