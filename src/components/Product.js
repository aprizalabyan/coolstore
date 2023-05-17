import React from 'react'
import item1 from '../assets/item-img-ventura.png'
import item2 from '../assets/item-img-razor.png'
import item3 from '../assets/item-img-beatriz.png'
import item4 from '../assets/item-img-phantom.png'

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
    }
  ]

  return (
    <div className="container pt-5 mb-5" id="product">
      <div className="row justify-content-center py-5">
        <h2 className="col-6 text-center">We Have Lots of Excellent and High Quality Products</h2>
      </div>
      <div className="row row-cols-4 justify-content-center">
        {product.map((prod) => {
        return(
          <div className="col" key={prod.id}>
            <div className="card h-100 text-center pt-4 px-2 align-items-center">
              <img src={prod.img} className="pb-2" alt="" />
              <div className="card-body">
                <h6 className="card-title text-start">{prod.title}</h6>
                <div className="row justify-content-between align-items-center">
                  <div className="col price text-start">${prod.price}</div>
                  <button className="col btnSecondary2">More Details</button>
                </div>
              </div>
            </div>
          </div>
        )})}
      </div>
    </div>
  )
}

export default Product