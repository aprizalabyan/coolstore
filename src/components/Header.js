import React from 'react'
import headerImg from '../assets/header-img.png'

const Header = () => {
  return (
    <div className="header" id="home">
      <div className="container d-flex align-items-center">
        <div className="col-6 d-flex flex-column gap-4">
          <h1>Premium Headphones in Your Ears</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
          <div className="d-flex gap-3">
            <button className="btnPrimary">Contact Us</button>
            <button className="btnSecondary">Buy Products</button>
          </div>
        </div>
        <div className="col-6">
          <img src={headerImg} alt="" className='w-100' />
        </div>
      </div>
    </div>
  )
}

export default Header