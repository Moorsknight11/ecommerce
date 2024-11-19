"use client";
import React, { useEffect, useState } from 'react'

const Vieworder = () => {

    const [router, setRouter] = useState("")
    const [id, setId] = useState("")
    const [order, setOrder] = useState("")
    useEffect(() => {
        const currentRouter = window.location.href;
        setRouter(currentRouter);
        const extractedId = currentRouter.split('/')[currentRouter.split('/').length - 1];
        setId(extractedId);
    }, []); // Run only once when the component mounts

    // Effect to fetch the order when ID is set
    useEffect(() => {
        if (!id) return; // Wait until the ID is available

        const fetchProduct = async () => {
            try {
                const response = await fetch(`/api/orders/${id}`);
                const data = await response.json();

                setOrder(data.message.transaction_status);
                console.log(data.message.transaction_status);
            } catch (error) {
                console.error('Error fetching order:', error);
            }
        };

        fetchProduct();
    }, [id]); // Run when `id` changes




    return (
        <div>
            <h1>View Order</h1>
            {order ? (
                <div>Order status: Your order is {JSON.stringify(order)}</div>
            ) : (
                <div>Order still not processed...</div>
            )}
        </div>
    )
}

export default Vieworder