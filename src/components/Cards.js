import React from 'react'
import { Link } from 'react-router-dom'
import './cards.css'



export default function Cards(props) {
  return (
        <Link to={props.link}><div className='section__card'>
          <div className='section__card_wrapper'>
           <a href='#'><img className='section__image' src={props.image}/></a>
           <a className='section__title' href='#'>{props.title}</a>
          </div>
        </div></Link>

  )
}
