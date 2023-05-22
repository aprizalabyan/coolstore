import React, { useState } from 'react'
import logoText from '../assets/logo-text.png'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home')

  const onUpdateActiveLink = (value) =>{
    setActiveLink(value)
  }

  return (
    <nav className="navbar navbar-expand-lg py-3 sticky-top">
      <div className="container container-fluid">
        <a className="navbar-brand me-3 pt-0" href="#home">
          <img src={logoText} alt='' />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav gap-2">
            <li className="nav-item">
              <a className={activeLink === 'home' ? 'nav-link active' : 'nav-link'} href="#home" onClick={() => onUpdateActiveLink('home')}>Home</a>
            </li>
            <li className="nav-item">
              <a className={activeLink === 'about' ? 'nav-link active' : 'nav-link'} href="#about" onClick={() => onUpdateActiveLink('about')}>About</a>
            </li>
            <li className="nav-item">
              <a className={activeLink === 'features' ? 'nav-link active' : 'nav-link'} href="#features" onClick={() => onUpdateActiveLink('features')}>Features</a>
            </li>
            <li className="nav-item">
              <a className={activeLink === 'product' ? 'nav-link active' : 'nav-link'} href="#product" onClick={() => onUpdateActiveLink('product')}>Product</a>
            </li>
            <li className="nav-item">
              <a className={activeLink === 'footer' ? 'nav-link active' : 'nav-link'} href="#footer" onClick={() => onUpdateActiveLink('footer')}>Contact</a>
            </li>
          </ul>
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <a className="nav-link" href="#login">Login</a>
            </li>
            <li className="nav-item">
              <button className="btnPrimary">Get Started</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar