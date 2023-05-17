import React from 'react'
import amazon from '../assets/partner-amazon.png'
import ebay from '../assets/partner-ebay.png'
import alibaba from '../assets/partner-alibaba.png'
import paypal from '../assets/partner-paypal.png'
import westernUnion from '../assets/partner-western-union.png'

const Partner = () => {
  return (
    <div className="container mt-3 mb-5">
      <div className="partner d-flex align-items-center justify-content-between px-5">
        <a href="#amazon"><img src={amazon} alt="" className="h-100"/></a>
        <a href="#ebay"><img src={ebay} alt="" className="h-100"/></a>
        <a href="#alibaba"><img src={alibaba} alt="" className="h-100"/></a>
        <a href="#paypal"><img src={paypal} alt="" className="h-100"/></a>
        <a href="#westernunion"><img src={westernUnion} alt="" className="h-100"/></a>
      </div>
    </div>
  )
}

export default Partner