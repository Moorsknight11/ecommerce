import React from 'react'
import Link from 'next/link'
import {urlFor} from '../../../lib/client'

function FooterBanner({bannerPrd,footerBanner: {desc="",image={}, discount = "", midText = "" ,largeText1="",largeText2="",smallText="",saleTime="",buttonText="",product=""} = {} }) {
//  console.log(desc)
console.log(bannerPrd?.slug?.current)


  if (!discount) {
    return null; // or render a loading indicator
  }
  console.log(bannerPrd?.slug?.current)
  return (
    <div className="footer-banner-container">
      <div className="banner-desc hero-banner-flex md:flex-row">
        <div className="left">
          <p>
          {discount}
          </p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>
          {saleTime}
          </p>
        </div>
        <img src={urlFor(image)} width={250} height={250} alt="image"/>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${bannerPrd?.slug?.current}`}>
            <button type="button">
              {buttonText}

            </button>
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default FooterBanner