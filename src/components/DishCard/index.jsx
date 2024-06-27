import { useState } from "react";

import { Container } from './styles';

import { MdFavoriteBorder } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

export function DishCard({isAdmin, pictureUrl, price, title}){
    let [ quantity, setQuantity ] = useState(0);

    function addQuantity(){
        quantity = quantity + 1;
        // setQuantity(prevState => prevState + 1);
        console.log(quantity);
    }
    function removeQuantity(total){
        if(total >= 1){
            setQuantity(prevState => prevState - 1);
        }
    }
    
    return(
        <Container to="/" isAdmin={isAdmin}>
            <MdFavoriteBorder/>
            <img src={`${pictureUrl}`} alt="Dish picture" />
            <div className='title'>
                <h3>{title}</h3>
                <IoIosArrowForward/>
            </div>
            <h4 className='price'>${price}</h4>
            <div className='quantity'>
                <button onClick={removeQuantity(quantity)}><AiOutlineMinus/></button>
                <h4>{quantity}</h4>
                <button onClick={addQuantity}><AiOutlinePlus/></button>
            </div>
        </Container>
    )
}