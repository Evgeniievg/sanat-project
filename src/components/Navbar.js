import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav className={`nav ${isOpen ? 'nav--open' : ''}`}>
      <Link to='/'><h1 className={`nav__logo ${isOpen ? 'nav__logo--open' : ''}`}>SANAT</h1></Link>
      <ul className={`nav__items ${isOpen ? 'nav__items--open' : ''}`}>
        <Link to='/'><li className='nav__item'>Home</li></Link>
        <Link to='/content'><li className='nav__item'>Content</li></Link>
        <Link to='/contact'><li className='nav__item'>Contact</li></Link>
      </ul>
      <button
        className={`nav__burger-button ${isOpen ? 'nav__burger-button--open' : ''}`}
        onClick={() => setOpen(!isOpen)}
      >
        <div className="nav__burger-line"></div>
        <div className="nav__burger-line"></div>
        <div className="nav__burger-line"></div>
      </button>
    </nav>
  )
}
