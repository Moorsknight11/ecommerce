"use client";
import React, { useState, useEffect } from 'react';
import { Category } from './components'
import Filtres from './components/Filtres';


const Home = () => {

  const [categories, setCategories] = useState([]);
  const [slug, setSlug] = useState("")
  const categoriesList = [
    'Aspiratör',
    'Ankastre Set',
    'Ocak',
    'Buzdolabı',
    'Fırın',
    'Davlumbaz',
    'Çamaşır Makinesi',
    'Bulaşık Makinesi',
    'Su Sebili',
    'Mikrodalga Fırın',
    'Mini&Midi Fırın',
    'Derin Dondurucu',
    'Kurutma Makinesi',
    'DAHA FAZLA GÖSTER'
  ];
 
  useEffect(() => {


    const fetchData = async () => {
      try {

        const response = await fetch('/api/getCategories');
        const { categories } = await response.json();
        // const matchingProduct = products.find(item => item._id === bannerData[0].product._ref);

        // // If a matching product is found, setBannerProduct to that product
        // if (matchingProduct) {
        //     setBannerProduct(matchingProduct);
        // }

        console.log(categories)
        setCategories(categories);

        // console.log(products)
        // console.log(bannerData)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="products-heading">
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

          <div>
            <div>
              <h2>Best selling product</h2>
              <p>dining tables of many variations</p>
            </div>
            <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Categories:</p>
            <div className="products-container">

              {categories?.map((category) => (
                <Category key={category._id} category={category} />



              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;