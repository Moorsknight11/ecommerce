"use client";
import React, { useState, useEffect } from 'react';
import { Category } from './components'



const Home = () => {

  const [categories, setCategories] = useState([]);

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
                <Category key={category.category_id} category={category} />



              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;