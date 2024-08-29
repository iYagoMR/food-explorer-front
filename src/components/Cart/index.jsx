import React, { useState, useEffect } from 'react';

import { Container } from './styles';
import { IoIosClose } from "react-icons/io";
import { Button } from '../Button';
import { OrderItem } from '../OrderItem';

import { IoIosArrowRoundForward } from "react-icons/io";

import defaultPhoto from '../../assets/plates/Mask group-1.png';

export function Cart({ cartIsOpen, onCloseCart, cart, setCart }){

    return(
        <Container data-cart-is-open={ cartIsOpen }>

            <button className='close' onClick={onCloseCart}>
                <IoIosClose/>
            </button>
            <div>
                <h1>Your order</h1>
                <ul>
                    {cart.map(item => (
                        <OrderItem 
                            key={item.id}
                            name={item.name}
                            picture={item.picture}
                            price={item.price}
                            quantity={item.quantity}
                        />
                    ))}

                </ul>
            </div>
            <div>
                <p>Total: $103.99</p>
                <Button 
                 title="Choose payment method"
                 icon={IoIosArrowRoundForward}
                 />
            </div>
        </Container>
    )
}