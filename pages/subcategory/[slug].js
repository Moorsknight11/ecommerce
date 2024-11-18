"use client"
import React, { useState, useEffect, useCallback } from 'react'
import Layout from '../../src/app/components/Layout'; // Import the Layout component
import Product from '../../src/app/components/Product';
import db from '../../lib/db';

const SubCategoryProducts = ({ subproducts }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        setProducts(subproducts)
    }, [])
    console.log(products)

    return (
        <Layout title="Home - Turquie Commerce Store"
            description="Welcome to the Turquie Commerce Store! Find amazing deals on products."
            keywords="home, e-commerce, Turquie, Tunisie, trade"
            imageUrl="/home-og-image.jpg">
            <div className="products-container">
                {products?.map((item) => (
                    <Product key={item.product_id} product={item} />
                ))}
            </div>
        </Layout>
    )

}







export const getServerSideProps = async (context) => {
    const { slug } = context.params; // Access the slug from the context

    try {
        // Query to fetch products based on the slug
        const [subproducts] = await db.execute(
            'SELECT * FROM product WHERE category_id = (SELECT category_id FROM categories WHERE name = ?)',
            [slug] // Assuming 'name' is the parameter in your router query
        );

        // Check if products are found
        if (subproducts.length === 0) {
            return {
                notFound: true, // Returns a 404 page if no products are found
            };
        }



        console.log(subproducts)


        const serializedProducts = subproducts.map(product => ({
            ...product,
            created_at: product.created_at.toISOString(),
            updated_at: product.updated_at.toISOString(), // Convert other Date fields if they exist
        }));

        return {
            props: { subproducts: serializedProducts },
        };

        // Return the fetched products as props

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
export default SubCategoryProducts