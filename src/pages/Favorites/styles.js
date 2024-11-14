import styled from 'styled-components';
import { DEVICE_WIDTH } from '../../styles/deviceWidth';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    > main{
        max-width: ${DEVICE_WIDTH.MAX};
        padding: 50px 24px;
        display: flex;
        flex-direction: column;
        margin: 0 auto;
        width: 100%;

        .dishes{
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;

            gap: 32px;


        }

        .fav-dish-card{
            display: flex;
            gap: 18px;
            flex: 1;
            
            background: ${({ theme }) => theme.COLORS.DARK_200};
            border: none;
            border-radius: 16px;

            padding: 20px 25px;
            min-width: 290px;
            max-width: 400px;

            @media( max-width:659px ){
                max-width: unset;
            }

            > div{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                gap: 5px;

                height: 100%;

                > button:first-child {
                    border: none;
                    color: ${({ theme }) => theme.COLORS.LIGHT_100};
                    background: none;

                    font-size: 20px;
                    font-weight: 400;

                    display: flex;
                    align-items: center;
                    gap: 6px;

                    > svg {
                        font-size: 26px;
                    }
                }

                > button:last-child{
                    border: none;
                    background: none;
                    color: ${({ theme }) => theme.COLORS.TOMATO_400};
                    text-align: left;

                }
            }

            img {
                width: 100px;
            }
        }
    }

`