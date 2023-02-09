import React from 'react'
import ArticlesPaintings from '../components/ArticlesPaintings'
import paintingsData from '../assets/paintingsData';

function Paintings() {
  const paintings = paintingsData.map((item) => (
    <ArticlesPaintings image={item.image} title={item.title} link={item.link} isWhite={item.isWhite} subtitle={item.subtitle}/>
  ));
  return (
    <div className='articles__page'>
      <h2 className='articles__title'>Paintings</h2>
      <div className='articles__wrapper'>{paintings}</div>
    </div>
  )
}

export default Paintings
