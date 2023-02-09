import React from 'react'
import { Link } from 'react-router-dom'
import './articlesList.css'

function ArticlesPaintings(props) {
  return (

      <div className='article__card'>
        <Link to={props.link}>
        <img src={props.image} className='article__card_image'/>
        <p className='article__card_text' style={{backgroundColor: props.isWhite ? 'rgba(98, 98, 98, .8)' : 'rgba(98, 98, 98, .4)'}}>{props.title}</p>
        <p className='article__card_subtext' style={{backgroundColor: props.isWhite ? 'rgba(98, 98, 98, .8)' : 'rgba(98, 98, 98, .4)'}}>{props.subtitle}</p>
        </Link>
      </div>
  )
}

export default ArticlesPaintings
