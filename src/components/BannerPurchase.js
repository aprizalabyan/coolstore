import React from 'react'
import purchaseBannerImg from '../assets/purchase-section-img.png'

const BannerPurchase = () => {
  return (
    <div className="container py-5 mb-5">
      <div className="bannerPurchase d-flex flex-column flex-sm-row align-items-center pt-md-0 pt-4">
        <div className="col-12 col-sm-6 col-md-7">
          <img src={purchaseBannerImg} alt="" />
        </div>
        <div className="col-10 col-sm-6 col-md-5 pb-5 pb-sm-0">
          <h2 className="col-lg-8 col-10 pb-lg-2">Purchase Your Awesome Product</h2>
          <p className="col-10 col-lg-8">Consectetur adipiscing elit duis tristique nibh sit amet commodo nulla. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet.</p>
          <button className="btnPrimary">Shop Now</button>
        </div>
      </div>
    </div>
  )
}

export default BannerPurchase