import React from 'react'
import { Link } from 'react-router-dom'
import './articlesList.css'
import assaImage from '../assets/assa.png';


function ArticlesPaintings(props) {
  const images = {
    'assa.png': assaImage,
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
