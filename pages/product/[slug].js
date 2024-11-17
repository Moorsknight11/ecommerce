"use client";
import React, { useState, useEffect, useCallback, } from 'react'
import { useStateContext } from '../../context/StateContext';
// import {Toaster} from 'react-hot-toast';
// import "../../src/app/globals.css";
import Layout from '../../src/app/components/Layout'; // Import the Layout component
import { AiOutlineMinus, AiOutlineplus, AiFillStar, AiOutlineStar, AiOutlinePlus } from 'react-icons/ai';
import Product from '../../src/app/components/Product';
// import ComfortIndicator from '../../src/app/components/ComfortIndicator';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';
import { useRouter } from 'next/router';
import db from '../../lib/db';
const ProductDetails = ({ product, products }) => {
    // if (!product) {
    //     return <div>Product not found</div>;
    // }

    console.log(products)
    const [imageOfColor, setImageOfColor] = useState({});
    const [imageOfIndex, setImageOfIndex] = useState(false);
    const [index, setIndex] = useState(0);
    const [indexColors, setIndexColors] = useState(0);
    const [selected, setSelected] = useState(2); // Medium by default
    const [selectedSizePrice, setSelectedSizePrice] = useState(0); // Medium by deselectmycolorfault
    const [enlargedImage, setEnlargedImage] = useState(null);
    const { selectedColor, setSelectedColor, onAdd, decQty, incQty, qty, setShowCart, selectedSize, setSelectedSize, setSelectedSizes, setTotalPrice, selectedSizes } = useStateContext();
    const [downloadedImages, setDownloadedImages] = useState([])
    const [savedProduct, setSavedProduct] = useState({})
    const [sseConnection, setSSEConnection] = useState(null);
    // const [reloadImgs, setReloadImgs] = useState(false)
    const [testImage, setTestImage] = useState([])
    const [testName, setTestName] = useState("")
    const [testDetails, setTestDetails] = useState("")

    // const [testColors, setTestColors] = useState([])


    // Dynamically import Hammer.js only on the client-side
    console.log(product)
    const {
        images_urls,
        discount,
        name,
        details,
        price,
        prices,
        _type,
        colors,
        description,
        quantity_in_stock
    } = product || {};

    const pricewithdiscount = parseFloat(price) - parseFloat(price * discount / 100)
    useEffect(() => {

        setTestName(name)
        setTestDetails(details)
        if (images_urls.split(',')) {
            setDownloadedImages(images_urls.split(','))
        }
        else {
            let array1 = []
            array1.push(images_urls)
            setDownloadedImages(array1)

        }


    }, [name, details])
    useEffect(() => {
        console.log(product)
        setSavedProduct(product)
        console.log(savedProduct)

    }, [product])

    console.log(savedProduct);
    // const listenToSSEUpdates = useCallback(() => {


    //     const eventSource = new EventSource('/api/productHandler/');
    //     console.log(eventSource)

    //     setSSEConnection(eventSource)

    //     eventSource.onmessage = (event) => {
    //         console.log(slug)
    //         console.log(event.data)
    //         // Handle the received message here
    //         // Assuming event.data is your object and products and setProducts are your state variable and setter function respectively
    //         // let jsonString = event.data.trim(); // Remove leading and trailing whitespace, including \n\n
    //         // Parse the JSON string
    //         let update = JSON.parse(event.data);
    //         // Check if the slug is equal to the _type
    //         if (update) {
    //             if (slug === update.slug.current) {

    //                 if (savedProduct._updatedAt === update._updatedAt) {
    //                     router.push('/category/');
    //                 }
    //                 else {



    //                     setSavedProduct(update)
    //                     console.log(update._id)
    //                     // Find the index of the product in the products array with id equal to _id

    //                     // If found, check if updatedAt differs
    //                     setIndex(0)
    //                     setImageOfIndex(false)
    //                     setTestName(update.name)
    //                     setTestDetails(update.details)
    //                     setTestImage([])
    //                     setTestImage(prevTestImage => {
    //                         // Clear the previous state and replace it with the new image array
    //                         return [...update.images_urls.split(',')];
    //                     });
    //                     console.log("Deleted existing product with same updatedAt:");

    //                     // Add the new product into the array

    //                 }
    //             } else {
    //                 console.log("Slug is not equal to _type");
    //             }
    //         }

    //     }
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
    //     }

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

    // // const fetchProductsByCategory = async (categorySlug) => {
    // //     try {
    // //         const productsQuery = `*[_type == "${categorySlug}"]`;
    // //         const products = await client.fetch(productsQuery);
    // //         setProducts(products);
    // //     } catch (error) {
    // //         console.error('Error fetching products:', error);
    // //     }
    // // };


    useEffect(() => {






        const selectElement = document.getElementById('mySelect');

        const selectColor = document.getElementById('colorMySelect');

        setSelectedSize(selectElement?.options[0]?.value)
        setSelectedColor(selectColor?.options[0]?.value)



        // if (colors) {
        //     const colorImage = colors?.find(item => item.name === selectColor?.options[0]?.value)?.image; // Using optional chaining for safety
        //     setImageOfColor(colorImage);
        // }
        // else {
        //     setImageOfColor(image[0]);
        // }




        if (prices) {
            setSelectedSizePrice(prices[0].price)

            product['price'] = prices[0].price


        }


    }, [product])


    const config = {
        delta: 2, // Increase the minimum distance required for a swipe to be detected
        preventScrollOnSwipe: true, // Prevent scrolling while swiping
        trackTouch: true, // Enable touch input tracking
        trackMouse: true, // Enable mouse input tracking
        rotationAngle: 45, // Rotate the swiped element by 45 degrees
        swipeDuration: 500, // Set the maximum duration of a swipe to 500 milliseconds
        touchEventOptions: { passive: false }, // Customize touch event options
    };

    const handleSlide = (direction) => {
        if (direction === 'next') {
            if (index < downloadedImages.length - 1) {
                setIndex(index + 1);
                setEnlargedImage(downloadedImages[index + 1]);
            }
        } else if (direction === 'prev') {
            if (index > 0) {
                setIndex(index - 1);
                setEnlargedImage(downloadedImages[index - 1]);
            }
        }
    };
    const handleSlideMain = (direction) => {
        if (direction === 'next') {
            if (index < downloadedImages.length - 1) {
                setIndex(index + 1);

            }
        } else if (direction === 'prev') {
            if (index > 0) {
                setIndex(index - 1);

            }
        }
    };

    const handleSwipe = useSwipeable({
        onSwipedLeft: () => {
            console.log('swipoe left')

            document.querySelector('.swipe-right').click()
            if (index < downloadedImages.length - 1) {

                document.querySelector('.enlarged-image-container img').classList.add('slide-in-left');
                // Remove animation class after animation ends
                setTimeout(() => {
                    document.querySelector('.enlarged-image-container img').classList.remove('slide-in-left');
                }, 500); // Adjust this value according to your animation duration
            }


        },
        onSwipedRight: () => {
            console.log('swipoe right')
            document.querySelector('.swipe-left').click()
            if (index > 0) {


                document.querySelector('.enlarged-image-container img').classList.add('slide-in-right');
                // Remove animation class after animation ends
                setTimeout(() => {
                    document.querySelector('.enlarged-image-container img').classList.remove('slide-in-right');

                }, 500); // Adjust this value according to your animation duration
            }


        },
        ...config,

    });

    const handleSwipeMain = useSwipeable({
        // Check if window is defined (client-side)
        onSwipedLeft: () => {
            // Handle swipe left (go to next item)
            // You can implement logic to navigate to the next item here
            document.querySelector('.swipe-right-main').click()
            if (index < downloadedImages.length - 1) {

                document.querySelector('.swipe-item').classList.add('slide-in-left');
                // Remove animation class after animation ends
                setTimeout(() => {
                    document.querySelector('.swipe-item').classList.remove('slide-in-left');
                }, 500); // Adjust this value according to your animation duration
            }

        },

        // Handle swipe right (go to previous item)
        // You can implement logic to navigate to the previous item here
        onSwipedRight: () => {
            console.log('swipe rightttttttttt')
            document.querySelector('.swipe-left-main').click()
            if (index > 0) {

                document.querySelector('.swipe-item').classList.add('slide-in-right');
                // Remove animation class after animation ends
                setTimeout(() => {
                    document.querySelector('.swipe-item').classList.remove('slide-in-right');
                }, 500); // Adjust this value according to your animation duration
            }


        },
        ...config
    })



    // const handleSwipeLeft = () => {
    //     // Update currentIndex for left swipe

    // };

    // const handleSwipeRight = () => {
    //     // Update currentIndex for right swipe

    // };










    const handleImageClick = (url) => {
        setEnlargedImage(url);
        if (document.querySelector('.product-detail-container .image-container')) {
            document.querySelector('.product-detail-container .image-container').style.display = "none"
        }
    };

    const handleCloseClick = () => {
        setEnlargedImage(null);
        document.querySelector('.product-detail-container .image-container').style.display = "block"
    };
    console.log(savedProduct)







    let selectedPrice;

    const handleBuyNow = () => {
        onAdd(product, qty, selectedSizePrice)
        setShowCart(true)
    }



    // console.log(qty); // Now it should log the value
    return (

        <Layout> {/* Wrap your page content with the Layout component */}


            <div>
                <div className="product-detail-container">
                    <div>
                        {enlargedImage && (
                            <div>
                                <div className="enlarged-image-container" {...handleSwipe}>

                                    <img
                                        src={enlargedImage}
                                        alt="enlarged-product"
                                        className="enlarged-product-detail-image"

                                    />


                                    <button style={{ position: 'absolute', zIndex: '500', top: '50%', left: '90%' }} className="swipe-right" onClick={() => handleSlide('next')}><FaChevronRight /></button>
                                    <button style={{ position: 'absolute', zIndex: '500', top: '50%', right: '90%' }} className="swipe-left" onClick={() => handleSlide('prev')}><FaChevronLeft /></button>
                                    <button onClick={handleCloseClick}>Close</button>
                                </div>
                            </div>
                        )}
                        <div className="image-container swipe-container">

                            {!imageOfIndex && <div style={{ position: 'relative' }}><img onClick={() => handleImageClick(downloadedImages && downloadedImages[index])}
                                src={downloadedImages[0]}
                                alt="product"
                                className="product-detail-image swipe-item"

                                {...handleSwipeMain} />
                                <button style={{ position: 'absolute', zIndex: '500', top: '50%', left: '90%' }} className="swipe-right-main" onClick={() => handleSlideMain('next')}><FaChevronRight className='chevron-phone' style={{ fontSize: '40px', color: 'grey' }} /></button>
                                <button style={{ position: 'absolute', zIndex: '500', top: '50%', right: '90%' }} className="swipe-left-main" onClick={() => handleSlideMain('prev')}><FaChevronLeft className='chevron-phone' style={{ fontSize: '40px', color: 'grey' }} /></button>
                            </div>
                            }

                            {imageOfIndex && <img src={downloadedImages[0]} alt="product" className="product-detail-image" />}
                        </div>
                        <div className="small-images-container">
                            {
                                downloadedImages?.map((item, i) => (
                                    <img
                                        alt={item.name}
                                        key={i}
                                        src={item}
                                        className={i === indexColors ? 'small-image selected-image' : 'small-image'}
                                        onMouseEnter={() => {
                                            setIndexColors(i)
                                            setImageOfIndex(true)
                                        }}



                                    />
                                ))
                            }
                        </div>
                        <div className="small-images-container without-colors">
                            {

                                testImage?.map((item, i) => {

                                    return (
                                        <img
                                            alt="item"
                                            key={i}
                                            src={""}
                                            className={i === index ? 'small-image selected-image' : 'small-image'}
                                            onMouseEnter={() => {
                                                setIndex(i)
                                                setImageOfIndex(false)
                                            }} />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="product-detail-desc">
                        <h1>
                            {testName}
                        </h1>
                        <div className="reviews">
                            <div>
                                <AiFillStar style={{ color: 'gold' }} />
                                <AiFillStar style={{ color: 'gold' }} />
                                <AiFillStar style={{ color: 'gold' }} />
                                <AiFillStar style={{ color: 'gold' }} />
                                <AiOutlineStar style={{ color: 'gold' }} />


                            </div>
                            <p>

                            </p>

                        </div>
                        <div>
                            <h4>Disponibilité</h4>
                            <h3>{quantity_in_stock > 0 ? "En stock" : "rupture de stock"}</h3>
                        </div>
                        <h4>
                            Details:
                        </h4>
                        <p>
                            {testDetails}
                        </p>
                        <p className="price">
                        </p>
                        <div>
                            {/* Your other JSX code... */}
                            {_type === 'mattress' ? (
                                <div>
                                    <label>Select Size:</label>
                                    <select id='mySelect' value={selectedSize ? selectedSize : ""} onChange={(e) => {
                                        const newSize = e.target.value;
                                        console.log(e.target.value)
                                        setSelectedSize(newSize);
                                        console.log(selectedSize)

                                        selectedPrice = prices.find(price => price.size === e.target.value)?.price;
                                        console.log(selectedPrice)
                                        setSelectedSizePrice(selectedPrice)
                                        console.log(product)
                                        product['price'] = selectedPrice
                                        // product['quantity']=qty
                                        // if (_type === 'mattress' && newSize) {
                                        //     const selectedPrice = prices.find(price => price.size === newSize)?.price;
                                        //     if (selectedPricee) {
                                        //         const totalPrice = selectedPrice * (qty);
                                        //         setTotalPrice(totalPrice);
                                        //     }
                                        // }

                                    }}
                                    >
                                        {prices?.map((price, index) => (

                                            <option key={price._key} value={price.size}>
                                                {price.size}
                                            </option>
                                        ))}
                                    </select>
                                    {selectedSize && (
                                        <h4>
                                            {/* ${prices.find((price) => price.size === selectedSize)?.price} */}
                                        </h4>
                                    )}
                                </div>
                            ) : (
                                <div style={{ display: "flex" }}>
                                    <h4 style={{ marginRight: "16px", textDecoration: "line-through", textDecorationColor: "red" }}>
                                        {price !== undefined ? 'TND ' + price : ""}
                                    </h4>
                                    <span> </span>
                                    <h4>
                                        {pricewithdiscount !== undefined ? ' TND ' + pricewithdiscount : ""}
                                    </h4>

                                </div>
                            )}
                            {/* Your other JSX code... */}
                        </div>

                        <div className="quantity">
                            <h3>Quantity:</h3>
                            <p style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }} className="quantity-desc">
                                <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="minus" onClick={decQty}>
                                    <AiOutlineMinus style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }} />
                                </span>
                                <span style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }} className="num">
                                    {qty}
                                </span>

                                <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="plus" onClick={incQty}>
                                    <AiOutlinePlus style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }} />
                                </span>


                            </p>
                        </div>

                        <div className="quantity">
                            <h3>Color:</h3>

                            <select id="colorMySelect" value={selectedColor ? selectedColor : ""} onChange={(e) => {
                                const newColor = e.target.value;
                                console.log(e.target.value)
                                setSelectedColor(newColor);
                                const colorImage = colors?.find(item => item.name === e.target.value)?.image; // Using optional chaining for safety
                                setImageOfColor(colorImage);
                                product['color'] = e.target.value
                            }
                            }>
                                {
                                    colors?.map((item, i) => (

                                        <option key={i} value={item.name}>{item.name}</option>



                                    ))
                                }




                            </select>

                        </div>

                        <div className="description" style={{ marginTop: "20px" }}>
                            <h3>Description et fiche technique:</h3>
                            {description.split('//')[0]}<br />
                            {description.split('//')[1]}<br />
                            {description.split('//')[2]}<br />
                        </div>

                        <div className="buttons">
                            <button className="add-to-cart" onClick={() => {
                                {


                                    onAdd(product, qty)


                                }
                            }} type="button">
                                Add to cart
                            </button>
                            <button className="buy-now" onClick={handleBuyNow} type="button">
                                Buy now
                            </button>
                        </div>

                    </div>

                </div>
                {/* <ComfortIndicator/> */}
                <div className="maylike-products-wrapper">
                    <h2>You may also like</h2>
                    <div className="marquee">
                        <div className="maylike-products-container track">
                            {products?.map((item) => (
                                <Product key={item._id} product={item} />
                            ))}
                        </div>

                    </div>
                </div>
            </div>

        </Layout>

    )

}






export const getServerSideProps = async (context) => {
    const { slug } = context.params;

    try {
        // Fetch the specific product using its slug
        const [result] = await db.execute('SELECT * FROM product WHERE name = ?', [slug]);


        // Fetch related products (e.g., same category or type)

        const product = result[0]; // Assuming you get a single product or an array with one object

        if (product) {
            // Serialize the date fields
            product.created_at = product.created_at.toISOString();
            product.updated_at = product.updated_at.toISOString();
        }

        return {
            props: { product },
        };
    } catch (error) {
        console.error(error);
        return {
            notFound: true, // If an error occurs, render a 404 page
        };
    }
};



// export const getStaticProps = async ({ params: { slug } }) => {

//     const query = `*[_type in ["product", "mattress", "chair", "bed", "bedroomset", "diningset", "jatifurniture", "multiplepurposes", "officetable", "sofa", "sofabed", "tvcabinet"] && slug.current == '${slug}'][0]`;

//     const product = await client.fetch(query)
//     const productsQuery = `*[_type in ["${product._type}"]]`
//     const products = await client.fetch(productsQuery)

//     return {
//         props: { products, product },
//         revalidate: true,
//     }
// }





// export const getStaticPaths = async () => {

//         const products = await client.fetch(`*[_type in ["product", "mattress","chair", "bed", "bedroomset", "diningset", "jatifurniture", "multiplepurposes", "officetable", "sofa", "sofabed", "tvcabinet"]]{

//             slug{
//                 current
//             }

//         }
//        `)

//     const paths =products?.map((product) => ({
//         params: { slug: product?.slug?.current },
//     }));
//     return { paths, fallback: false }; // fallback: false means other routes should 404
// };

export default ProductDetails;

