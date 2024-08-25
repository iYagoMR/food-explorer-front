import styled from 'styled-components';
import { DEVICE_WIDTH } from '../../styles/deviceWidth';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    
    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    //If admin logged in adjust the header
    .header.admin{
        justify-content: unset;

        > a{
            margin: 0 auto;
        }
    }

    .header {
        padding: 50px 28px 28px 28px;
        
        display: flex;
        justify-content: space-between;

        width: 100%;
        max-width: ${DEVICE_WIDTH.MAX};

        .new-dish{display: none;}

        .sign-out{
            display: none;
        }

        > div{
            display: none;
        }
    }
    
    svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        background: none;
        font-size: 2.4rem;
    }

    .menu {
        display: flex;
        flex-direction: column;
        top: 0;

        background: ${({ theme }) => theme.COLORS.DARK_400};
        box-sizing: border-box;
        width: 100%;
        height: 100%; /* Ensure it occupies the full height */
        position: fixed;
        z-index: 999;
        overflow-y: auto; /* Allows scrolling if content exceeds the screen */
        transition: transform 0.3s ease, opacity 0.3s ease;
    }

    .menu .top {
        background-color: ${({ theme }) => theme.COLORS.DARK_700};
        display: flex;
        gap: 10px;
        padding: 40px 28px 25.5px 28px;
        align-items: center;
    }
    
    .menu .top button {
        border: none;
        background: none;
    }

    .menu h1 {
        font-size: 21px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-weight: 400;
    }
    
    .menu .top svg {
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
        list-style: none;
        padding: 15px 10px;
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
    }
    
    .menu .bottom ul li button {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-family: 'Poppins', sans-serif;
        font-size: 24px;
        font-weight: 300;
        background: none;
        border: none;
        text-align: left;
        width: 100%;
    }

    .menu.closed { 
        transform: translateY(-20px); 
        pointer-events: none; 
        opacity: 0;
    }
    
    .menu.open { 
        transform: translateY(0); 
        pointer-events: auto; 
        opacity: 1;
        transition: 0.3s;
    }

    .closed { 
        transform: translateY(-100%);
    }



    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        .header {
            align-items: center;

            gap: 32px;

            > a {
                min-width: fit-content;
            }

            .new-dish{
                display: block;
                max-width: 200px;
                font-size: 1.2rem;
            }

            > div{
                gap: 0;
                display: block;
            }

            .sign-out{
                display: block;
                border: none;
                background: none;
                padding: 0;

                > svg{
                    font-size: 2rem;
                }
            }
        }


    }
`;

export const Receipt = styled.button`
    display: flex;
    justify-content: center;
    align-content: center;
    position: relative;
    border: none;
    background: none;

    > svg{
            font-size: 22px;
            margin-right: 3px;
    }

    > span {
        position: absolute;
        background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 14px;
        font-family: "Poppins", sans-serif;
        right: -10px;
        top: -7px;
        padding: 1px 6px;
        border-radius: 15px;
    }
    > p {
        display: none;
    }

    @media(min-width: ${DEVICE_BREAKPOINTS.LG}){
        background: ${({ theme }) => theme.COLORS.TOMATO_100};
        border-radius: 5px;
        padding: 15px 12px;

        align-items: center;
        min-width: 170px;
        display: flex;
        gap: 8px;

        > svg{
            font-size: 22px;
            margin-right: 0;
        }

        > p {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            display: block;
        }

        > span {
            display: none;
        }
    }
`;

export const HambMenu = styled.button`
    display: flex;
    justify-content: center;
    align-content: center;
    border: none;
    background: none;

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        display: none;

    }
`;

export const Logout = styled.button`
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 24px;
    font-family: "Poppins", sans-serif;
    font-weight: 300;
`;