import React from 'react'
import { Link } from 'react-router-dom'
import './articlesList.css'
import breigelImage from '../assets/breigel.jpg';
import maYuanImage from '../assets/ma-yuan.jpg';

function ArticlesPaintings(props) {
  const images = {
    'ma-yuan.jpg': maYuanImage,
    'breigel.jpg': breigelImage,
  };
  return (

      <div className='article__card'>
        <Link to={props.link}>
        <img src={images[props.image]} className='article__card_image'/>
        <p className='article__card_text' style={{backgroundColor: props.isWhite ? 'rgba(98, 98, 98, .8)' : 'rgba(98, 98, 98, .4)'}}>{props.title}</p>
        <p className='article__card_subtext' style={{backgroundColor: props.isWhite ? 'rgba(98, 98, 98, .8)' : 'rgba(98, 98, 98, .4)'}}>{props.subtitle}</p>
        </Link>
      </div>
  )
}

export default ArticlesPaintings
