import React from 'react'
import Head from 'next/head'
import Navbar  from './Navbar'
import Footer from './Footer'
import "../globals.css";

function Layout({children}) {
  return (
    <div className="layout">
      <Head>
        <title>Dalanda store</title>
      </Head>
      <header>
        <Navbar/>
      </header>
      <main className="main-container">
       {children}
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout