import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill, BsFillBagCheckFill } from 'react-icons/bs';
import Layout from '../src/app/components/Layout'; // Import the Layout component
import { runFireWorks } from '../lib/utils';
import { useStateContext } from '../context/StateContext';

const Success = () => {
    const { setCartItems, setTotalPrice, setTotalQuantities } = useStateContext()

    useEffect(() => {
        localStorage.clear();
        setCartItems([]);
        setTotalPrice(0);
        setTotalQuantities(0);
        runFireWorks()

    }, [setCartItems, setTotalPrice, setTotalQuantities])

    return (
        <Layout>
            <div className='success-wrapper'>
                <div className="success">
                    <p className='icon'>
                        <BsFillBagCheckFill />

                    </p>
                    <h2>
                        Thank you for your order!
                    </h2>
                    <p className='email-msg'>
                        Check your email inbox for the receipt.
                    </p>
                    <p className='description'>
                        If you have any questions please email
                        <a className='email' href="mailto:hajjejhazem063@gmail.com">
                            hajjejhazem063@gmail.com
                        </a>
                        <Link href='/'>

                            <button type="button" width="300px" className='btn'>
                                Continue shopping

                            </button>
                        </Link>

                    </p>

                </div>
            </div>
        </Layout>
    )
}

export default Success