import React from 'react'
import { Link } from 'react-router-dom'
import './cards.css'
import breigelImage from '../assets/breigel.jpg';
import assaImage from '../assets/assa.png';




export default function Cards(props) {
  const images = {
    'breigel.jpg': breigelImage,
    'assa.png': assaImage,
  };
  return (
        <Link to={props.link}><div className='section__card'>
          <div className='section__card_wrapper'>
           <img className='section__image' src={images[props.image]}/>
           <h3 className='section__title' href='#'>{props.title}</h3>
          </div>
        </div></Link>

  )
}
