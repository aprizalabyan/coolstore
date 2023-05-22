import React from 'react'
import wifiImg from '../assets/icon-wifi.png'
import musicImg from '../assets/icon-music.png'
import soundImg from '../assets/icon-sound-on.png'
import micImg from '../assets/icon-mic.png'

const Provide = () => {
  return (
    <div className="container mb-5 pt-lg-5" id="about">
      <h2 className="text-center py-3 py-lg-5">What We Provide</h2>
      <div className="row row-cols-2 row-cols-md-4 justify-content-center row-gap-4">
        <div className="col">
          <div className="card h-100 text-center py-3 px-2 align-items-center">
            <img src={wifiImg} className="card-img-top pt-2" alt="" />
            <div className="card-body">
              <h5 className="card-title">Wireless Freedom</h5>
              <p className="card-text">Consectetur adipiscing elit duis tristique nibh sit amet.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 text-center py-3 px-2 align-items-center">
            <img src={musicImg} className="card-img-top pt-2" alt="" />
            <div className="card-body">
              <h5 className="card-title">Noise Cancelling</h5>
              <p className="card-text">Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 text-center py-3 px-2 align-items-center">
            <img src={soundImg} className="card-img-top pt-2" alt="" />
            <div className="card-body">
              <h5 className="card-title">Sound Control</h5>
              <p className="card-text">Consectetur adipiscing elit duis tristique sollicitudin.</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100 text-center py-3 px-2 align-items-center">
            <img src={micImg} className="card-img-top pt-2" alt="" />
            <div className="card-body">
              <h5 className="card-title">Virtual Sound</h5>
              <p className="card-text">Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Provide