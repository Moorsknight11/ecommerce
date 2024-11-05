import React from 'react'
import Link from 'next/link'
import { urlFor } from '../../../lib/client'

function Product({ product: {name } }) {

  
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
      <Link style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }} href={`/product/${name}`}>
      {name}
        <div className="product-card">
          <img
            src={""}
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