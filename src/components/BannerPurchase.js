import React from 'react'
import purchaseBannerImg from '../assets/purchase-section-img.png'

const BannerPurchase = () => {
  return (
    <div className="container py-5 mb-5">
      <div className="bannerPurchase d-flex align-items-center">
        <div className="col-7">
          <img src={purchaseBannerImg} alt="" className='w-100' />
        </div>
        <div className="col-5">
          <h2 className="col-8 pb-2">Purchase Your Awesome Product</h2>
          <p className="col-8">Consectetur adipiscing elit duis tristique nibh sit amet commodo nulla. Consectetur adipiscing elit duis tristique sollicitudin nibh sit amet.</p>
          <div className="d-flex gap-3">
            <button className="btnPrimary">Shop Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannerPurchase