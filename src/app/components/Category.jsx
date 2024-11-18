import React from 'react'
import Link from 'next/link'

export async function generateMetadata({ params }) {
  // Fetch product details

  return {
    title: `${params.name} - Buy Now, Turquie commerce Store`,
    description: `Get the best deal on ${params.name}. Available now.`,
    keywords: params.name+",commerce,e-commerce,trade,drop-shipping,dropshipping,tunisie,turquie,café,chauffe eau élélctrique, produits divers,quincaillerie,electroménager",
    openGraph: {
      title: `${params.name} - Buy Now`,
      description: `Check out ${params.name}, available at the best price.`,
      images: [
        {
          url: params.imageUrl,
          width: 800,
          height: 600,
          alt: `${params.name} Image`,
        },

      ],
      type: 'website',
    },
  };
}
export function generateViewport() {
  return {
    themeColor: 'black',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  }
}
function Category({ category: { image_url, name } }) {
  console.log(image_url)


  return (

    <div>

      <Link style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} href={`/category/${name}`}>
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

export default Category