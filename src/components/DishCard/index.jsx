import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Button, Title, DishPicture } from './styles';

import { MdFavoriteBorder } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { IoCart } from "react-icons/io5";

import picturePlaceholder from "../../assets/plates/Mask group-1.png";

import { api } from '../../services/api';

export function DishCard({isAdmin, data, ...rest}){
    const [ quantity, setQuantity ] = useState(1);
    const navigate = useNavigate();

    const pictureUrl = data.picture ? `${api.defaults.baseURL}/files/${data.picture}` : picturePlaceholder;

    function handleDetails(id){
        navigate(`/dish-details/${id}`)
    }

    function addQuantity(){
        setQuantity(prevQuantity => prevQuantity + 1);
        console.log(quantity);
    }

    function removeQuantity(){
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0));
        console.log(quantity);
    }

    const formattedQuantity = String(quantity).padStart(2, '0');

    return(
        <Container isAdmin={isAdmin} {...rest}>
            <button><MdFavoriteBorder size={25}/></button>
            <DishPicture onClick={() => handleDetails(data.id)}>
                <img src={pictureUrl} alt={`${data.name}'s picture`} />
            </DishPicture>
            <Title onClick={() => handleDetails(data.id)}>
                <h3>{data.name}</h3>
                <IoIosArrowForward/>
            </Title>
            <h4 className='price'>${data.price}</h4>
            <div className='quantity'>
                <button onClick={removeQuantity}><AiOutlineMinus size={20}/></button>
                <h4>{formattedQuantity}</h4>
                <button onClick={addQuantity}><AiOutlinePlus size={20}/></button>
            </div>
            <Button>
                <IoCart size={15}/>
                Add item
            </Button>
        </Container>
    )
}