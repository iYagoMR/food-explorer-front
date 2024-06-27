import styled from 'styled-components';

export const Container = styled.div`
    position: relative;

    .header {
        padding: 50px 28px 28px 28px;
        background-color: ${( {theme}) => theme.COLORS.DARK_700};
        display: flex;
        justify-content: space-between;
    }
    
    svg{
        color: ${( {theme}) => theme.COLORS.LIGHT_100};
        background: none;
        font-size: 24px;
    }

    .menu {
        display: flex;
        flex-direction: column;
        top: 0;

        box-sizing: border-box;
        width: 100%;
        position: absolute;
        z-index: 2;

        transition: transform 0.3s ease, opacity 0.3s ease;
    }

    .menu .top{
        background-color: ${( {theme}) => theme.COLORS.DARK_700};

        display: flex;
        gap: 10px;
        padding: 50px 28px 28px 28px;
        align-items: center;
    }
    .menu .top button {
        border: none;
        background: none;
    }

    .menu h1 {
        font-size: 21px;
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        font-weight: 400;
    }
    .menu .top svg{
        font-size: 43px;
    }
    .menu .bottom {
        box-sizing: border-box;
        display: flex;
        gap: 35px;

        flex-direction: column;
        padding: 36px 28px 28px 28px;
    }
    .menu .bottom ul li {
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        font-family: 'Poppins', sans-serif;
        font-size: 25px;
        font-weight: 300;

        padding: 10px;

        border-bottom: 1px solid ${({theme}) => theme.COLORS.DARK_1000};

        list-style: none;
        
    }

    .menu.closed { transform: translateY(-20px); pointer-events: none; opacity: 0;}
    .menu.open { transform: translateY(0); pointer-events: auto; opacity: 1;}
    .closed { display: none; }
`

export const Receipt = styled.button`
    display: flex;
    justify-content: center;
    align-content: center;
    position: relative;
    border: none;
    background: none;

    > span {
        position: absolute;
        background-color: ${( {theme}) => theme.COLORS.TOMATO_100};
        color: ${( {theme}) => theme.COLORS.LIGHT_100};
        
        font-size: 14px;
        font-family: "Poppins", sans-serif;
        
        right: -8px;
        top: -7px;

        padding: 1px 6px;
        border-radius: 15px;
    }
`

export const HambMenu = styled.button`
    display: flex;
    justify-content: center;
    align-content: center;
    border: none;
    background: none;
`
