import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import "../globals.css";

import Head from 'next/head';


function Layout({ children, title, description, keywords, imageUrl }) {
  return (
    <>

      <Head>
        <title>{title || "Default Title - Turquie Commerce Store"}</title>
        <meta
          name="description"
          content={description || "Default description for the site."}
        />
        <meta name="google-site-verification" content="SI155yl4TvA8fcmYv85zaH2Vpr0Je1x8W1_jRWwzUoA" />
        <meta
          name="keywords"
          content={
            keywords ||
            "commerce, e-commerce, trade, drop-shipping, Turquie, Tunisie"
          }
        />
        <meta property="og:title" content={title || "Default Title"} />
        <meta
          property="og:description"
          content={
            description || "Default description for social media sharing."
          }
        />
        <meta
          property="og:image"
          content={imageUrl || "/default-og-image.jpg"}
        />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="layout">
        <header>
          <Navbar />
        </header>
        <main className="main-container">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default Layout