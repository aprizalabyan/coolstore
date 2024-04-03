import React from 'react'
import Carousel from 'react-multi-carousel'
import { Icon } from '@iconify/react'
import item1 from '../../assets/item-img-ventura.png'
import item2 from '../../assets/item-img-razor.png'
import item3 from '../../assets/item-img-beatriz.png'
import item4 from '../../assets/item-img-phantom.png'

const Product = () => {
  const product = [
    {
      id: 1,
      title: "Ventura Gold Black - Wireless Headphone",
      price: 122,
      img: item1
    },
    {
      id: 2,
      title: "Razor Black - Wireless Headphone",
      price: 105,
      img: item2
    },
    {
      id: 3,
      title: "Beatriz Red - Wireless Headphone",
      price: 97,
      img: item3
    },
    {
      id: 4,
      title: "Phantom Black - Wireless Headphone",
      price: 108,
      img: item4
    },
    {
      id: 5,
      title: "Razor Black - Wireless Headphone",
      price: 105,
      img: item2
    },
    {
      id: 6,
      title: "Razor Black - Wireless Headphone",
      price: 105,
      img: item2
    },
    {
      id: 7,
      title: "Beatriz Red - Wireless Headphone",
      price: 97,
      img: item3
    },
  ]

  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 992 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 2
    }
  }

  const ButtonGroup = ({ next, previous, goToSlide, ...rest}) => {
    const { carouselState: { currentSlide, slidesToShow } } = rest
    const endIndex = product.length - slidesToShow
    return (
      <div className="position-relative">
        <div className="position-absolute top-0 end-0 pe-2">
          <button className={currentSlide === 0 ? 'btnArrow disable' : 'btnArrow'} onClick={() => previous()}><Icon icon="la:long-arrow-alt-left" /></button>
          <button className={currentSlide === endIndex ? 'btnArrow disable' : 'btnArrow'} onClick={() => next()}><Icon icon="la:long-arrow-alt-right" /></button>
        </div>
      </div>
    );
  };

  return (
    <div className="container pt-5 mb-5" id="product">
      <div className="row justify-content-center py-5">
        <h2 className="col-10 col-lg-6 text-center">We Have Lots of Excellent and High Quality Products</h2>
      </div>
        <Carousel infinite={false} responsive={responsive} arrows={false} renderButtonGroupOutside={true} customButtonGroup={<ButtonGroup />} className="gap-2">
        {product.map((prod) => {
        return(
          <div className="col px-2 py-2 py-lg-4" key={prod.id}>
            <div className="card h-100 text-center py-lg-2 px-2 align-items-center">
              <img src={prod.img} className="imgProduct pt-4" alt="" />
              <div className="card-body">
                <h6 className="card-title text-start">{prod.title}</h6>
                <div className="row flex-column flex-sm-row flex-md-column flex-xl-row justify-content-between align-items-center">
                  <div className="col price text-start">${prod.price}</div>
                  <button className="col btnSecondary2">More Details</button>
                </div>
              </div>
            </div>
          </div>
        )})}
        </Carousel>
    </div>
  )
}

export default Product