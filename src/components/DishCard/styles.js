import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Container = styled.div`
    min-width: 170px;

    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;

    padding: 24PX;
    gap: 13.5px;
    border-radius: 8px;

    background: ${({ theme }) => theme.COLORS.DARK_200};

    > button:first-child {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        position: absolute;
        top: 14px;
        right: 14px;

        border: none;
        background: none;
    }

    .title {
        display: flex;
        gap: 5px;
        align-items: center;
    }
    .title h3 {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
    }
    .title svg {
        font-size: 10px;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }

    .price{
        color: ${({ theme }) => theme.COLORS.CAKE_200};
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
    }

    .quantity{
        display: flex;
        gap: 15px;
        justify-content: center;
    }
    .quantity h4{
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
    }
    .quantity button {
        border: none;
        background: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

`

export const Button = styled.button`
    background: ${({ theme }) => theme.COLORS.TOMATO_100};
    border: none;
    padding: 10px 12px;
    border-radius: 5px;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;

    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;

`

export const DishPicture = styled.button`
    border: none;
    background: none;
    > img {
        width: 88px;
        height: auto;
    }
`

export const Title = styled.button`
    border: none;
    background: none;
    display: flex;
    gap: 5px;
    align-items: center;
    
    h3 {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
    }
    svg {
        font-size: 10px;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
    }
`