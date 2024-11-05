"use client";
import { useEffect, useRef, useState } from 'react';
import React from 'react'
import Link from 'next/link'
import { useStateContext } from '../../../context/StateContext';
import { AiOutlineShopping, AiOutlineWhatsApp, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { Cart } from './'
import { urlFor } from '../../../lib/client';
// import Layout from '../../src/app/components/Layout'; // Import the Layout component

function Navbar() {

  const { showCart, setShowCart, totalQuantities } = useStateContext();

  const [searchResults, setSearchResults] = useState(false);
  const searchResultsRef = useRef(null);

  const searchInputRef = useRef(null);
  useEffect(() => {


    handleSearch()








  }, [])

  async function handleSearch() {

    let query;


    query = searchInputRef.current.value;
    if (query.length === 0) {
      searchResultsRef.current.innerHTML = '';
      return;
    }





    query = encodeURIComponent(query)

    console.log({ query })

    const response = await fetch('/api/searchProduct', {
      method: 'POST',
      headers:
      {
        'Content-Type': 'application/json',

      },
      body: JSON.stringify({ query }),
    })
    console.log(response)
    if (response.statusCode === 500) return
    const data = await response.json();
    console.log(data)
    if (data.length > 0) { setSearchResults(true) }
    displayResults(data)





  }

  function onHover() {
    this.style.backgroundColor = 'red';
  }
  function onDeHover() {
    this.style.backgroundColor = 'white';
  }
  function displayResults(results) {
    searchResultsRef.current.innerHTML = '';

    if (results.length === 0) {
      searchResultsRef.current.innerHTML = 'No results found';
      return;
    }

    const ul = document.createElement('ul');
    results.forEach(product => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      const img = document.createElement('img');
      img.alt = "searchproduct"
      img.src = urlFor(product.image[0])
      img.width = 70
      img.height = 70
      a.href = `/product/${product.slug.current}`
      a.style = 'display: flex; justify-content: start; align-items: center;';
      a.addEventListener('mouseenter', onHover);
      a.addEventListener('mouseleave', onDeHover);
      a.appendChild(img)
      a.appendChild(li)

      li.textContent = product.name;
      li.dataset.slug = product.slug.current;
      ul.style = 'display:inline-flex;flex-direction:column'
      ul.appendChild(a);
    });
    console.log(searchResultsRef.current)
    searchResultsRef.current.appendChild(ul);
    searchResultsRef.current.style = 'width:80%;position:absolute;top:100%;margin:auto;z-index:50;background-color:white;color:black;font-size:24px;'
  }








  <div></div>

  return (
    <div className="navbar-container">
      <div className="logo">
        <Link style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} href="https://wa.me/+21652344555"><p>UZL</p>
          <AiOutlineWhatsApp />
        </Link>

      </div>
      <div style={{ flex: '1 1 auto' }}>
        <div style={{ margin: 'auto', width: '80%', display: "flex", position: 'relative', justifyContent: 'center', alignItems: 'center  ' }}>
          <input type="text" id="searchInput" ref={searchInputRef} placeholder="Search products..." style={{ width: '100%' }} onKeyUp={handleSearch} />
          <AiOutlineSearch style={{ position: 'absolute', right: '0' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '80%', margin: 'auto' }}>
          <div id="searchResults" ref={searchResultsRef}>



          </div>
          {searchResults && <AiOutlineClose style={{zIndex:'100',position:'absolute',left:'89%',top:'150%',backgroundColor: 'gold', height: "25px" }} onClick={() => {
            searchResultsRef.current.innerHTML = "";

            setSearchResults(false)

          }} />}
        </div>
        <div>
            <h1>Welcome to the Home Page</h1>
            <Link href="/admin/adminPassword">
                <p>Go to Admin Page</p>
            </Link>
        </div>
      </div>
      <button className="cart-icon" onClick={() => setShowCart(true)}>

        <AiOutlineShopping />
        <span className="cart-item-qty">
          {totalQuantities}
        </span>
      </button>
      {showCart && <Cart />}
    </div>
  )
}

export default Navbar