import React from 'react'
import { AiFillInstagram, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai'
import Link from 'next/link'
function Footer() {
  return (
    <div className="footer-container">
      <p>
        2022 UZL All rights reserved
      </p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
        <Link href="https://wa.me/+21651180307">
          <AiOutlineWhatsApp/>
          </Link>
         

      </p>
    </div>
  )
}

export default Footer
