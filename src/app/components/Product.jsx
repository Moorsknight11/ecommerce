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
function Product({ product: { name, images_urls } }) {



  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
      <Link style={{ display: 'flex', justifyContent: 'center', alignItems: "center" }} href={`/product/${name}`}>

        <div className="product-card">
          <img
            src={images_urls.split(',') ? images_urls.split(',')[0] : images_urls}
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