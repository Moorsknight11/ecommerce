import React from 'react'
import Link from 'next/link'
import { urlFor } from '../../../lib/client'


function Category({ category: { image, name, slug } }) {
  console.log(image)
  if (!slug || !slug.current) {
    // Handle the case where slug is undefined or null
    // You might want to return a different UI element, display an error message, or take other actions
    return (
      <div>
        <p>category slug is not defined.</p>
        {/* You can add more UI elements or messages here */}
      </div>
    );
  }
  return (

    <div>
  
      <Link style={{display:'flex',justifyContent:'center',alignItems:'center'}} href={`/category/${slug.current}`}>
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
          {/* <p className="product-price">
            {_type === 'mattress' || _type === 'bed' ? `$${prices[0]?.price}` : (price !== undefined ? `$${price}` : '')}
          </p> */}
         
        </div>

      </Link>
    </div>

  )
}

export default Category