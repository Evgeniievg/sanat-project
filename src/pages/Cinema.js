import React from 'react'
import ArticlesCinema from '../components/ArticlesCinema'
import cinemaData from '../assets/cinemaData';
import withScrollReset from '../components/withScrollResset';


function Cinema() {
  const cinema = cinemaData.map((item) => (
    <ArticlesCinema image={item.image} title={item.title} link={item.link} isWhite={item.isWhite} subtitle={item.subtitle}/>
  ));
  return (
    <div className='articles__page'>
    <h2 className='articles__title'>Cinema</h2>
    <div className='articles__wrapper'>{cinema}</div>
    </div>
  )
}

export default withScrollReset(Cinema)
