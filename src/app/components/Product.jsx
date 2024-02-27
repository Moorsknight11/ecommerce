import React from 'react'
import Link from 'next/link'
import { urlFor } from '../../../lib/client'

function Product({ product: { image, name, slug, price, _type, prices } }) {
  console.log(slug)
  if (!slug || !slug.current) {
    // Handle the case where slug is undefined or null
    // You might want to return a different UI element, display an error message, or take other actions
    return (
      <div>
        <p>Product slug is not defined.</p>
        {/* You can add more UI elements or messages here */}
      </div>
    );
  }
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
      <Link style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }} href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
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