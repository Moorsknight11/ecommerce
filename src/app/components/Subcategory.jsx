import React from 'react'
import Link from 'next/link'
import Filtres from './Filtres'

function Subcategory({ subcategory: {name,image_url} }) {

  
  return (

    <div>
    
      <Link style={{display:'flex',justifyContent:'center',alignItems:'center'}} href={`/subcategory/${name}/`}>
        <div className="product-card">
          <img
            src={image_url}
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

export default Subcategory