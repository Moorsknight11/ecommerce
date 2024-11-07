import React from 'react'

import { FaChevronDown } from 'react-icons/fa';
import { FaTruckPickup } from 'react-icons/fa';
import { BiCoupon } from 'react-icons/bi';
import { FaTicketAlt } from 'react-icons/fa';
import { Roboto } from 'next/font/google';
const Filtresmobile = () => {
    const items = [
        { name: 'Marka', chevron: true },
        { name: 'Yakıt Tipi', chevron: true},
        { name: 'Fiyat', chevron: true },
        { name: 'Kurulum Gerekli mi?', chevron: true },
        { name: 'Renk', chevron: true },
        { name: 'Hızlı Teslimat', chevron: false, pickup: true },
        { name: 'Avantajlı Ürünler', chevron: true },
        { name: 'Kuponlu Ürünler', chevron: false,coupon:true },
    ];

    return (
        <div className='show-on-mobile'>
            <ul style={{ listStyle: 'none', padding: 0, display: "flex", width: "100vw", overflowX: 'scroll',fontFamily:"Merriweather" }}>
                {items.map((item, index) => (
                    <li className='bulb' key={index} style={{ display: 'flex',justifyContent:"center", whiteSpace: "nowrap", alignItems: 'center', margin: '8px 0' }}>
                        {item.pickup && <FaTruckPickup color='green' style={{ marginRight: '8px' }} />}
                        {item.coupon && <FaTicketAlt color="red" style={{ marginRight: '8px' }} />}
                        <span>{item.name}</span>
                        {item.chevron && <FaChevronDown style={{ marginLeft: '8px' }} />}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Filtresmobile;
