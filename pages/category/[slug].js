"use client"
import React, { useState, useEffect, useCallback } from 'react'
import { client } from '../../lib/client'
import Layout from '../../src/app/components/Layout'; // Import the Layout component
import SubCategory from '../../src/app/components/Subcategory';
import { useRouter } from 'next/router';
import db from '../../lib/db';
import Subcategory from '@/app/components/Subcategory';
import Filtres from '@/app/components/Filtres';

const CategoryProducts = ({ subcategories }) => {
    const [subproducts, setSubProducts] = useState([]);
    const [datasetUpdated, setDatasetUpdated] = useState(false);
    const [sseConnection, setSSEConnection] = useState(null);

    useEffect(() => {

        setSubProducts(subcategories)
    }, [])
    console.log(subproducts)
    // Inside your functional component
    // const router = useRouter();
    // const { slug } = router.query;

    // const listenToSSEUpdates = useCallback(() => {


    //     const eventSource = new EventSource('/api/handler/');
    //     console.log(eventSource)

    //     setSSEConnection(eventSource)

    //     eventSource.onmessage = (event) => {

    //         console.log(event.data)
    //         // Handle the received message here
    //         // Assuming event.data is your object and products and setProducts are your state variable and setter function respectively
    //         // let jsonString = event.data.trim(); // Remove leading and trailing whitespace, including \n\n
    //         // Parse the JSON string
    //         let update = JSON.parse(event.data);
    //         // Check if the slug is equal to the _type
    //         if (update) {
    //             if (slug === update._type) {
    //                 console.log(update._id)
    //                 // Find the index of the product in the products array with id equal to _id
    //                 let index = categoryProducts.findIndex((product) => product._id === update._id);

    //                 // Check if a matching product was found
    //                 console.log(index)
    //                 if (index !== -1) {
    //                     // If found, check if updatedAt differs
    //                     if (categoryProducts[index]._updatedAt === update._updatedAt) {
    //                         // If they differ, delete the existing product
    //                         const updatedProducts = [...categoryProducts]; // Create a copy of the products array
    //                         updatedProducts.splice(index, 1); // Remove the existing product at the found index
    //                         categoryProducts=updatedProducts; // Update the state with the modified array
    //                         setProducts(categoryProducts)
    //                         console.log("Deleted existing product with same updatedAt:");
    //                     } else {
    //                         console.log("Product with same updatedAt already exists, updating existing product.");
    //                         const updatedProducts = [...categoryProducts]; // Create a copy of the products array
    //                         updatedProducts[index] = update // Remove the existing product at the found index
    //                         categoryProducts=updatedProducts; // Update the state with the modified array
    //                         setProducts(categoryProducts)

    //                     }
    //                 }

    //                 // Add the new product into the array
    //                 else if (index === -1) {

    //                     const updatedProducts = [...categoryProducts];
    //                   updatedProducts.push(update); // Add the new product to the array
    //                     console.log("Added product:", update);
    //                     console.log(categoryProducts)
    //                     setProducts([...updatedProducts])


    //                 }

    //             } else {
    //                 console.log("Slug is not equal to _type");
    //             }
    //         }






    //     };

    //     eventSource.onerror = (error) => {
    //         console.error('SSE connection error:', error);
    //         // Handle the SSE connection error here
    //     };

    //     eventSource.onopen = () => {
    //         console.log('SSE connection established.', eventSource);
    //         // Optional: Perform actions when the SSE connection is established
    //     };

    //     eventSource.onclose = () => {
    //         console.log('SSE connection closed.');
    //         // Optional: Perform actions when the SSE connection is closed
    //     };

    //     // Clean up the EventSource when the component unmounts
    //     return () => {
    //         eventSource.close();
    //     };






    // }, []);









    // useEffect(() => {

    //     // fetchProductsByCategory(slug)

    //     listenToSSEUpdates();

    //     return () => {

    //         if (sseConnection) {

    //             sseConnection.close();

    //         }

    //     };

    // }, [listenToSSEUpdates]);




    // useEffect(() => {

    //     const handleBeforeUnload = () => {

    //         console.dir(sseConnection);

    //         if (sseConnection) {

    //             console.info('Closing SSE connection before unloading the page.');

    //             sseConnection.close();

    //         }

    //     };

    //     window.addEventListener('beforeunload', handleBeforeUnload);

    //     // Clean up the event listener when the component is unmounted

    //     return () => {

    //         window.removeEventListener('beforeunload', handleBeforeUnload);

    //     };

    // }, [sseConnection]);




    // console.log(categoryProducts)
    return (
        <Layout>
            <div style={{display:"flex",justifyContent:"start",alignItems:"start"}}>
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