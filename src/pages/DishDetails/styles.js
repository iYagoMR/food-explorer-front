import styled from 'styled-components';
import { DEVICE_WIDTH } from '../../styles/deviceWidth';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    
    main {
        max-width: ${DEVICE_WIDTH.MAX};
        width: 100%;
        margin: 0 auto;
        padding: 50px 24px;
        display: flex;
        flex-direction: column;
    }

    .wrapper {
        display: flex;
        flex-direction: column;

        align-items: center; // Centering content horizontally

        gap: 20px;
        
        img {
            width: 22.3rem;
            height: auto;
        }
        
        h1 {
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            font-size: 3rem;
            font-weight: 500;
            font-family: 'Poppins' sans-serif;
        }

        .dish-description {
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            gap: 24px;
            align-items: center;
            text-align: center;

            > p{
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
                font-size: 1.6rem;
                line-height: 140%;
                font-family: 'Poppins', sans-serif;
                
            }

            .ingredients{
                gap: 24px;
                display: flex;
                flex-wrap: wrap;
                
                justify-content: center;
            }
            
            div:last-child{
                margin-top: 30px;
                display: flex;
                gap: 28px;

                .quantity {
                    display: flex;
                    align-content: center;
                    align-items: center;
                    gap: 20px;

                    h4{
                        color: ${({ theme }) => theme.COLORS.LIGHT_100};
                        font-size: 22px;
                        font-weight: 500;
                    }

                    button {
                        background: none;
                        border: none;
                        color: ${({ theme }) => theme.COLORS.LIGHT_100};
                    }
                }
                
                > button{
                    color: ${({ theme }) => theme.COLORS.LIGHT_300};
                    font-weight: 500;
                    font-family: 'Poppins' sans-serif;
                    
                    font-size: 18px;
                    padding: 8px 16px;

                }
            }
            > button{
                font-size: 14px;
                margin-top: 20px;
            }
        }  

    }  

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}){

        .wrapper{
            .dish-description{
                div:last-child{
                    flex-direction: column;

                    .quantity{
                        justify-content: center;
                    }
                }
            }

        }

    }



    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        .wrapper {
            padding: 0 30px;
            max-width: 500px;
            margin: 0 auto;

            .dish-description > button{
                max-width: 300px;
            }
        }

    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
        .wrapper {
            padding: 0 10px;
        }
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
        

        .wrapper{
            gap: 50px;
            flex-direction: row;
            
            .dish-description{
                align-items: unset;
                text-align: left;

                .ingredients {
                    justify-content: flex-start;
                }

                > button{
                    width: 160px;
                }
            }
        }
    }

`