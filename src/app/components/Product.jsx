import React from 'react'
import Link from 'next/link'
import { urlFor } from '../../../lib/client'

function Product({ product: {name,images_urls} }) {

  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
      <Link style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }} href={`/product/${name}`}>
 
        <div className="product-card">
          <img
            src={images_urls.split(',')?images_urls.split(',')[0]:images_urls}
            width={250}
            height={250}
            className="product-image"
            alt="productcard"
          />
          <p className="product-name">
            {name}
          </p>
          <p className="product-price">
          </p>

        </div>

      </Link>
    </div>
  )
}

export default Product