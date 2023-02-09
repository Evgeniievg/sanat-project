import React from 'react'
import Cards from '../components/Cards'
import sectionData from '../assets/sectionData';
import './content.css'
import { Link } from 'react-router-dom';



function Content() {
  const cards = sectionData.map((item) => (
    <Cards image={item.image} title={item.title} link={item.link} />
  ));
  return (
    <section className='content'>
      <h1 className='content__title'>Sections</h1>
      <div className="sections__cards">{cards}</div>
    </section>
  )
}

export default Content
