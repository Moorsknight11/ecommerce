"use client";
import React, { useRef, useState,useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineMinus, AiOutlineLeft, AiOutlineShopping, AiOutlinePlus } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';
import toast from 'react-hot-toast';
import { useStateContext } from '../../../context/StateContext';
import CustomerFormModal from './CustomerFormModal';

function Cart() {
  const [selectedFinal, setselectedFinal] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const cartRef = useRef()

  const {
    setSelectedSizes,selectedSize, onRemove, setSelectedSize, setTotalPrice, toggleCartItemQuantity, totalPrice, totalQuantities, setShowCart, selectedSizes
  } = useStateContext()
  console.log(selectedSizes)


  return (
    <div className="cart-wrapper" ref={cartRef}>

      <div className="cart-container">
        <button type="button" className='cart-heading' onClick={() => setShowCart(false)}>
          <AiOutlineLeft />
          <span className="heading">
            Your cart
          </span>
          <span className='cart-num-items'>
            ({totalQuantities} items)
          </span>
        </button>
        {selectedSizes.length < 1 && (<div className='empty-cart'>
          <AiOutlineShopping size={150} />
          <h3>your Shopping bag is empty</h3>
          <Link href="/">
            <button type="button" onClick={() => setShowCart(false)} className='btn'>Continue shopping</button>
          </Link>
        </div>)}
        <div className='product-container'>
          {selectedSizes.length >= 1 && selectedSizes.map((item, index) => (
            <div className="product flex-col md:flex-row" key={index}>
              <img src={""} className='cart-product-image' alt="product" />
              <div className='item-desc'>
                <div className='flex top'>
                  <h5>
                    {item.name} {item.size} $ {item.price}
                  </h5>


                </div>
                <div className="flex bottom">
                  <div>
                    <p style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="quantity-desc">
                      <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="minus" onClick={() => {
                        toggleCartItemQuantity(item._id, item.price, 'dec')

                      }}>
                        <AiOutlineMinus style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
                      </span>
                      <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="num">
                        {item.quantity}
                      </span>

                      <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="plus" onClick={() => {
                        toggleCartItemQuantity(item._id, item.price, 'inc')

                      }}>
                        <AiOutlinePlus style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} />
                      </span>


                    </p>
                  </div>


                  <button type="button" className="remove-item" onClick={() => onRemove(item)}>
                    <TiDeleteOutline />
                  </button>

                </div>

              </div>

            </div>

          ))}


        </div>

        {selectedSizes.length >= 1 && (
          <div className='cart-bottom'>
            <div className='total'>
              <h3>
                Subtotal:
              </h3>
              <h3>
                ${totalPrice}
              </h3>

            </div>
            <div className='btn-container'>
              <button className='button' onClick={openModal}>Proceed to Checkout</button>

              {/* Modal component */}
              <CustomerFormModal commande={JSON.stringify(selectedSizes)} isOpen={isModalOpen} onClose={closeModal} />

            </div>

          </div>
        )}
      </div>
    </div>
  )
}

export default Cart