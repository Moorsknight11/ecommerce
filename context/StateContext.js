"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

import { toast } from 'react-hot-toast';
import { Preview } from 'sanity';
const Context = createContext()

export const StateContext = ({ children }) => {
    const [selectedSizes, setSelectedSizes] = useState([]);

    const [selectedSize, setSelectedSize] = useState(""); // Medium by default
    const [selectedColor, setSelectedColor] = useState(""); // Medium by default


    const [showCart, setShowCart] = useState(false)
    const [cartItems, setCartItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [totalQuantities, setTotalQuantities] = useState(0)
    const [qty, setQty] = useState(1)
    let foundProduct;
    let index;
    // const onAdd = (product, quantity) => {
    //     // If product type is 'mattress', find the price based on selected size
    //     let selectedPrice;
    //     if (product._type === 'mattress') {
    //         selectedPrice = product.prices.find(price => price.size === product.selectedSizes)?.price;
    //     } else {
    //         selectedPrice = product.price;
    //     }

    //     // Update total price and quantities
    //     setTotalPrice(prevTotalPrice => prevTotalPrice + selectedPrice * quantity);
    //     setTotalQuantities(prevTotalQuantities => prevTotalQuantities + quantity);

    //     // Check if the product already exists in the cart
    //     const checkProductInCart = cartItems.find(item => item._id === product._id);

    //     // Update cart items
    //     if (checkProductInCart) {
    //         const updatedCartItems = cartItems.map(cartProduct => {
    //             if (cartProduct._id === product._id) {
    //                 return {
    //                     ...cartProduct,
    //                     quantity: cartProduct.quantity + quantity
    //                 };
    //             }
    //             return cartProduct;
    //         });
    //         setCartItems(updatedCartItems);
    //     } else {
    //         // Add new product to the cart
    //         const updatedProduct = {
    //             ...product,
    //             quantity: quantity
    //         };
    //         setCartItems([...cartItems, updatedProduct]);
    //     }

    //     // Show success message
    //     toast.success(`${quantity} ${product.name} added to the cart`);
    // };


    const onAdd = (product, qty) => {
        // If product type is 'mattress', find the price based on selected size



        let selectedPrice;
        // if (product._type === 'mattress') {
        //     selectedPrice = product.prices[0].price;
        // } else {
        //     selectedPrice = product.price;
        // }

        // Update total price and quantities

        console.log(selectedSizes)
        // Check if the product already exists in the cart



        const checkProductInCart = selectedSizes.find(item => item._id === product.product_id);

        if (checkProductInCart) {
            console.log('yesssssssssssssssssss')
            const updatedCartItems = selectedSizes.map(cartProduct => {
                if (cartProduct._id === product._id) {
                    setTotalPrice(prevTotalPrice => prevTotalPrice + (parseFloat(product.price)-parseFloat(product.price)*product.discount/100) * qty);
                    setTotalQuantities(prevTotalQuantities => prevTotalQuantities + qty);
                    return {
                        ...cartProduct,
                        quantity: cartProduct.quantity + qty
                    };
                }
                return cartProduct;
            });
            setSelectedSizes(updatedCartItems);

        }
        else {
            setTotalPrice(prevTotalPrice => prevTotalPrice + (parseFloat(product.price)-parseFloat(product.price)*product.discount/100) * qty);
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities + qty);

            setSelectedSizes(prevSizes => {
                // Create a new size object
                const newSizeObj = { name:product.name,description:product.description,_id: product.product_id, quantity: qty,pricewithoutdiscount:parseFloat(product.price), price: (parseFloat(product.price)-parseFloat(product.price)*product.discount/100),picture:product.images_urls.split(',')[0],discount:product.discount};

                // Push the new size object to the previous sizes array
                return [...prevSizes, newSizeObj,];
            });



        }
        // }
        // else {
        //     const checkProductInCart = selectedSizes.find(item => item._id === product._id && item.price === product.price);

        //     if (checkProductInCart) {

        //         const updatedCartItems = selectedSizes.map(cartProduct => {
        //             if (cartProduct._id === product._id) {
        //                 setTotalPrice(prevTotalPrice => prevTotalPrice + product.price * qty);
        //                 setTotalQuantities(prevTotalQuantities => prevTotalQuantities + qty);
        //                 return {
        //                     ...cartProduct,
        //                     quantity: cartProduct.quantity + qty
        //                 };
        //             }
        //             else {
        //                 setTotalPrice(prevTotalPrice => prevTotalPrice + cartProduct.price * qty);
        //                 setTotalQuantities(prevTotalQuantities => prevTotalQuantities + qty);
        //             }
        //             return cartProduct;
        //         });
        //         setSelectedSizes(updatedCartItems);

        //     }
        //     else {
        //         console.log("noooooooooooooo", product)
        //         setTotalPrice(prevTotalPrice => prevTotalPrice + product.price * qty);
        //         setTotalQuantities(prevTotalQuantities => prevTotalQuantities + qty);



        //         setSelectedSizes(prevSizes => {
        //             // Create a new size object
        //             const newSizeObj = { _id: product._id, quantity: qty, size: selectedSize, image: image, name: name, details: details, price: selectedSizePrice, prices: prices, _type: _type, color: color };

        //             // Push the new size object to the previous sizes array
        //             return [...prevSizes, newSizeObj];
        //         });


        //     }

        // }



        // if (selectedColor) {
        //     const checkProductInCart = selectedSizes.find(item => item._id === product._id && item.price === product.price && item.color === selectedColor);

        //     if (checkProductInCart) {
        //         console.log('yesssssssssssssssssss')
        //         const updatedCartItems = selectedSizes.map(cartProduct => {
        //             if (cartProduct._id === product._id) {
        //                 return {
        //                     ...cartProduct,
        //                     quantity: cartProduct.quantity + qty
        //                 };
        //             }
        //             return cartProduct;
        //         });
        //         setSelectedSizes(updatedCartItems);
        //         setTotalPrice(prevTotalPrice => prevTotalPrice + selectedSizePrice * cartProduct.quantity);
        //         setTotalQuantities(prevTotalQuantities => prevTotalQuantities + cartProduct.quantity);
        //     }
        // }
        // else{
        //     const checkProductInCart = selectedSizes.find(item => item._id === product._id && item.price === product.price);

        // if (checkProductInCart) {
        //     console.log('yesssssssssssssssssss')
        //     const updatedCartItems = selectedSizes.map(cartProduct => {
        //         if (cartProduct._id === product._id) {
        //             return {
        //                 ...cartProduct,
        //                 quantity: cartProduct.quantity + qty
        //             };
        //         }
        //         return cartProduct;
        //     });
        //     setSelectedSizes(updatedCartItems);
        //     setTotalPrice(prevTotalPrice => prevTotalPrice + selectedSizePrice * qty);
        //     setTotalQuantities(prevTotalQuantities => prevTotalQuantities + qty);
        // }

        // }



        // Update cart items
        // if (checkProductInCart) {
        //     const updatedCartItems = selectedSizes.map(cartProduct => {
        //         if (cartProduct._id === product._id) {
        //             return {
        //                 ...cartProduct,
        //                 quantity: cartProduct.qty+ qty
        //             };
        //         }
        //         return cartProduct;
        //     });
        //    setSelectedSizes(updatedCartItems);
        // } else {
        //     // Add new product to the cart
        //     const updatedProduct = {
        //         ...product,
        //         qty:qty,
        //         size:selectedSize, 
        //      price:selectedSizePrice,


        //     };
        //     setSelectedSizes([...selectedSizes, updatedProduct]);
        // }
        // Show success message
        toast.success(`${qty} ${product.name} added to the cart`);
    };

    // const toggleCartItemQuantity = (id, value) => {
    //     foundProduct = cartItems.find((item) => item._id === id)
    //     index = cartItems.findIndex((product) => product._id === id)
    //     const newCartItems = cartItems.filter((item)=>item._id!==id)
    //     if (value === 'inc') {


    //         setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity + 1 }])
    //         setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
    //         setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)


    //     } else if (value === 'dec') {


    //         if (foundProduct.quantity > 1) {


    //             setCartItems([...newCartItems, { ...foundProduct, quantity: foundProduct.quantity - 1 }])
    //             setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
    //             setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)
    //         }

    //     }

    // }

    // const onRemove = (product) => {
    //     foundProduct = cartItems.find((item) => item._id === product._id)
    //     const newCartItems = cartItems.filter((item) => item._id !== product._id)
    //     setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity)
    //     setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity)
    //     setCartItems(newCartItems)
    // }














    const onRemove = (product) => {
        const foundProduct = selectedSizes.find((item) => item._id === product._id);
        if (foundProduct) {

            const newCartItems = selectedSizes.filter((item) => item._id !== product._id || item.price !== product.price || item.color !== product.color);
            setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.quantity)
            setTotalQuantities(prevTotalQuantities => prevTotalQuantities - foundProduct.quantity)
            setSelectedSizes(newCartItems)
        }
        // if (foundProduct._type === 'mattress' && selectedSize) {
        //     const selectedPrice = foundProduct.prices.find((priceObj) => priceObj.size === selectedSize)?.price;
        //     if (selectedPrice) {
        //         const priceDifference = selectedPrice * foundProduct.qty;
        //         setTotalPrice((prevTotalPrice) => prevTotalPrice - priceDifference);
        //         setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.qty);
        //     }
        // } else {
        //     setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price * foundProduct.qty);
        //     setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - foundProduct.qty);
        // }

    };

    // const toggleCartItemQuantity = (id, value) => {
    //     const updatedCartItems = cartItems.map((item) => {
    //         foundProduct = cartItems.find((item) => item._id === id)
    //         index = cartItems.findIndex((product) => product._id === id)
    //         if (item._id === id) {
    //             if (value === 'inc') {
    //                 setTotalPrice((prevTotalPrice) => prevTotalPrice + foundProduct.price)
    //                 setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
    //                 return { ...item, quantity: item.quantity + 1 };


    //             } else if (value === 'dec' && item.quantity > 1) {
    //                 setTotalPrice((prevTotalPrice) => prevTotalPrice - foundProduct.price)
    //                 setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)

    //                 return { ...item, quantity: item.quantity - 1 };

    //             }
    //         }
    //         return item;
    //     });

    //     // Update total price and quantities here if needed

    //     setCartItems(updatedCartItems);
    // };









    // const toggleCartItemQuantity = (id, value) => {
    //     const foundProduct = cartItems.find((item) => item._id === id);
    //     const index = cartItems.findIndex((product) => product._id === id);
    //     let updatedCartItems = [...cartItems];

    //     if (foundProduct) {
    //         const { _id, price, quantity } = foundProduct;

    //         if (value === 'inc') {
    //             updatedCartItems[index] = { ...foundProduct, quantity: quantity + 1 };
    //             setTotalQuantities((prevTotalQuantities) => prevTotalQuantities + 1);
    //         } else if (value === 'dec' && quantity > 1) {
    //             updatedCartItems[index] = { ...foundProduct, quantity: quantity - 1 };
    //             setTotalQuantities((prevTotalQuantities) => prevTotalQuantities - 1);
    //         }

    //         if (foundProduct._type === 'mattress' && selectedSizes) {
    //             const selectedPrice = foundProduct.prices.find((priceObj) => priceObj.size === selectedSizes)?.price;
    //             if (selectedPrice) {
    //                 const priceDifference = (selectedPrice - price) * Math.abs(updatedCartItems[index].quantity);
    //                 setTotalPrice((prevTotalPrice) => prevTotalPrice + priceDifference);
    //             }
    //         }

    //         setCartItems(updatedCartItems);
    //     }
    // };
    const toggleCartItemQuantity = (id, price, value) => {
        console.log(id, value)
        const updatedCartItems = selectedSizes.map((item) => {
            foundProduct = selectedSizes.find((item) => item._id === id)
            index = selectedSizes.findIndex((product) => product._id === id)
            console.log(foundProduct)

            if (item._id === id && item.price === price) {
                if (value === 'inc') {
                    setTotalPrice((prevTotalPrice) => prevTotalPrice + item.price)
                    setTotalQuantities(prevTotalQuantities => prevTotalQuantities + 1)
                    return { ...item, quantity: item.quantity + 1 };


                } else if (value === 'dec' && item.quantity > 1) {
                    setTotalPrice((prevTotalPrice) => prevTotalPrice - item.price)
                    setTotalQuantities(prevTotalQuantities => prevTotalQuantities - 1)

                    return { ...item, quantity: item.quantity - 1 };

                }
            }
            return item;
        });

        // Update total price and quantities here if needed

        setSelectedSizes(updatedCartItems);
    };




    const incQty = () => {
        setQty((prevQty) => prevQty + 1)

    }
    const decQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1;


            return prevQty - 1

        })

    }
    // console.log(qty)
    return (

        <Context.Provider
            value={{
                selectedColor,
                setSelectedColor,
                showCart,
                setShowCart,
                setCartItems,
                totalPrice,
                setTotalPrice,
                totalQuantities,
                setTotalQuantities,
                selectedSizes,
                setSelectedSizes,
                selectedSize,
                setSelectedSize,
                qty,
                incQty,
                decQty,
                onAdd,
                toggleCartItemQuantity,
                onRemove
            }}>
            {children}

        </Context.Provider>
    )

}
export const useStateContext = () => {
    const context = useContext(Context);
    if (!context) {
        throw new Error("useStateContext must be used within a StateContextProvider");
    }
    return context;
};

