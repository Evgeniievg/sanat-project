import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from '../components/Header';
import sectionData from '../assets/sectionData';
import Sections from '../components/Sections';
import Cards from '../components/Cards';
import data from '../assets/data';
import withScrollReset from '../components/withScrollResset';


function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % data.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentIndex, data.length]);

  function handleNext() {
    setCurrentIndex((currentIndex + 1) % data.length);
  }

  function handlePrev() {
    setCurrentIndex((currentIndex - 1 + data.length) % data.length);
  }

  const cards = sectionData.map((item) => (
    <Cards image={item.image} title={item.title} link={item.link}/>
  ));

  return (
    <>
      <Header
        image={data[currentIndex].image}
        title={data[currentIndex].title}
        subtitle={data[currentIndex].subtitle}
        isWhite={data[currentIndex].isWhite}
        link={data[currentIndex].link}
        id={data[currentIndex].id}
      />
      <div onClick={handlePrev} className="handle__button handle__button_prev"></div>
      <div onClick={handleNext} className="handle__button handle__button_next"></div>
      <Sections />
      <div className="sections__cards">{cards}</div>
    </>
  );
}

export default withScrollReset (Home);
