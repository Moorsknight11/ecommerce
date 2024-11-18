"use client"
import React, { useState, useEffect, useCallback } from 'react'
import Layout from '../../src/app/components/Layout'; // Import the Layout component
import SubCategory from '../../src/app/components/Subcategory';
import db from '../../lib/db';
import Filtres from '@/app/components/Filtres';
import Filtresmobile from '@/app/components/Filtresmobile';
import FilterButtons from '@/app/components/FilterButtons';

const CategoryProducts = ({ subcategories }) => {
    const [subproducts, setSubProducts] = useState([]);


    useEffect(() => {

        setSubProducts(subcategories)
    }, [])
    console.log(subproducts)
   
    return (
        <Layout >
            <FilterButtons />
            <Filtresmobile />
            <div style={{ display: "flex", justifyContent: "start", alignItems: "start" }}>
                <Filtres />
                <div className="products-container">
                    {subproducts?.map((item) => (
                        <SubCategory key={item.category_id} subcategory={item} />
                    ))}
                </div>
            </div>
        </Layout>
    )

}


export const getServerSideProps = async (context) => {
    const { slug } = context.params;
    try {
        // Query to fetch products based on the slug
        const [subcategories] = await db.execute('SELECT * FROM categories WHERE parent_category_id = (SELECT category_id FROM categories WHERE name = ?)', [slug]);

        // Check if products are found
        if (subcategories.length === 0) {
            return {
                notFound: true, // Returns a 404 page if no products are found
            };
        }

        // Return the fetched products as props
        return {
            props: { subcategories },
        };
    } catch (error) {
        console.error('Database query error:', error);
        return {
            notFound: true, // Returns a 404 page in case of an error
        };
    }
};




// export const getStaticProps = async ({ params: { slug } }) => {
//     // console.log(slug)

//     const productsQuery = `*[_type =="${slug}"]`
//     const categoryProducts = await client.fetch(productsQuery)

//     return {
//         props: { categoryProducts },
//         revalidate: true,
//     }






// }




// export const getStaticPaths = async () => {

//     const categories = await client.fetch(`*[_type == "category"]{

//         slug{
//             current
//         }

//     }
//    `)

//     const paths = categories?.map((category) => ({
//         params: { slug: category?.slug?.current },
//     }));
//     return { paths, fallback: false }; // fallback: false means other routes should 404
// };
export default CategoryProducts