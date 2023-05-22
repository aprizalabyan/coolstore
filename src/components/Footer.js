import React from 'react'
import { Icon } from '@iconify/react';
import logoText from '../assets/logo-text.png'
import googlePlay from '../assets/banner-google-play.png'
import appStore from '../assets/banner-app-store.png'

const Footer = () => {
  return (
    <div className="footer mt-5" id="footer">
      <div className="container">
        <div className="row row-gap-5">
          <div className="col-12 col-md-4 pe-md-5 px-5 px-sm-0">
            <img src={logoText} alt="" />
            <p className="text-justify py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <h6>Social Media</h6>
            <div className="d-flex gap-3 fs-5">
              <a href="#shipping"><Icon icon="ion:logo-instagram" /></a>
              <a href="#shipping"><Icon icon="ri:facebook-fill" /></a>
              <a href="#shipping"><Icon icon="ion:logo-youtube" /></a>
              <a href="#shipping"><Icon icon="mdi:twitter" /></a>
              <a href="#shipping"><Icon icon="fa-brands:pinterest-square" /></a>
            </div>
          </div>
          <div className="col-6 col-md-2 d-flex flex-column gap-2 ps-5 ps-sm-0">
            <h6 className="pb-2">Help</h6>
            <span><a href="#shipping">Shipping</a></span>
            <span><a href="#shipping">Payments</a></span>
            <span><a href="#shipping">FAQ</a></span>
            <span><a href="#shipping">Product Care</a></span>
          </div>
          <div className="col-6 col-md-2 d-flex flex-column gap-2 pe-5 pe-sm-0">
            <h6 className="pb-2">About Us</h6>
            <span><a href="#shipping">Latest News</a></span>
            <span><a href="#shipping">Offline Stores</a></span>
            <span><a href="#shipping">Latest Technology</a></span>
            <span><a href="#shipping">Our Partners</a></span>
            <span><a href="#shipping">Careers</a></span>
            <span><a href="#shipping">Programs</a></span>
          </div>
          <div className="col-12 col-sm-8 col-md-4 d-flex flex-column px-5 px-sm-0">
            <h6>GET THE LATEST PROMOS AND OTHER INFO BY REGISTERING YOUR EMAIL!</h6>
            <input type="email" className="form-control my-4" id="email-form" placeholder="Your email" />
            <button className="btnPrimary mb-4">SUBSCRIBE !</button>
            <h6 className="py-2">Download our Apps</h6>
            <div className="d-flex gap-3">
              <a href="#googleplay"><img src={googlePlay} alt="" /></a>
              <a href="#appstore"><img src={appStore} alt="" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="borderTop text-center py-3">
        <span>Copyright <Icon icon="ic:baseline-copyright" /> 2023 Coolstore. All rights reserved.</span>
      </div>
    </div>
  )
}

export default Footer