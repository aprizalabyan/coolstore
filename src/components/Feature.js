import React from 'react'
import imgFeature from '../assets/features-section-img.png'
import feature1 from '../assets/icon-ft-tech.png'
import feature2 from '../assets/icon-ft-design.png'
import feature3 from '../assets/icon-ft-hq.png'
import feature4 from '../assets/icon-ft-bass.png'
import bannerImg from '../assets/here-music-section-img.png'

const Feature = () => {
  return (
    <div className="container mb-5 pt-5" id="features">
      <div className="feature d-flex flex-column flex-sm-row justify-content-between align-items-center py-4 py-md-0">
        <div className="col">
          <img src={imgFeature} alt="" className="imgFeature" />
        </div>
        <div className="col ps-5 ps-sm-0">
          <h2 className="pb-lg-4">Outstanding Features</h2>
          <div className="col-10 d-flex align-items-center gap-4 py-lg-3 py-2">
            <img src={feature1} alt="" className="iconFeature"/>
            <div className="row">
              <h5>Latest Technology</h5>
              <span>Consectetur adipiscing elit duis tristique nibh sit amet commodo nulla.</span>
            </div>
          </div>
          <div className="col-10 d-flex align-items-center gap-4 py-lg-3 py-2">
            <img src={feature2} alt="" className="iconFeature"/>
            <div className="row">
              <h5>Fashinonable Design</h5>
              <span>Consectetur adipiscing elit duis tristique nibh sit amet commodo nulla.</span>
            </div>
          </div>
          <div className="col-10 d-flex align-items-center gap-4 py-lg-3 py-2">
            <img src={feature3} alt="" className="iconFeature"/>
            <div className="row">
              <h5>High Quality Sound</h5>
              <span>Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla.</span>
            </div>
          </div>
          <div className="col-10 d-flex align-items-center gap-4 py-lg-3 py-2">
            <img src={feature4} alt="" className="iconFeature"/>
            <div className="row">
              <h5>Bass Boost</h5>
              <span>Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla.</span>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center mt-5">
        <div className="col-8 col-sm-5">
          <h2 className="col-10 pb-md-4 pb-2">Here the Music not the Noise</h2>
          <p>Consectetur adipiscing elit duis tristique nibh sit amet commodo nulla. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla.</p>
          <div className="d-flex gap-3">
            <button className="btnPrimary">Get Started</button>
          </div>
        </div>
        <div className="col-10 col-sm-5 d-flex justify-content-end">
          <img src={bannerImg} alt="" className="imgFeature2"/>
        </div>
      </div>
    </div>
  )
}

export default Feature