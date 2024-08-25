import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';
import { DEVICE_WIDTH } from '../../styles/deviceWidth';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    > main {
        padding: 50px 24px;
        margin: 0 auto;

        max-width: ${DEVICE_WIDTH.MAX};
        width: 100%;
        
        display: flex;
        flex-direction: column;
        gap: 35px;

        >div:last-of-type{
            display: flex;
            gap: 32px;
            margin-top: 15px;
        }
        > div:last-of-type > button:last-of-type{
            background: ${( {theme}) => theme.COLORS.TOMATO_400};
            font-size: 16px;
        }
        > div:last-of-type > button:first-of-type{
            background: ${( {theme}) => theme.COLORS.DARK_800};
            font-size: 16px;
        }
    } 


    //Adapt form for bigger screens
    @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
        > main {
            flex-wrap: wrap;
            flex-direction: row;

            > div:nth-child(1){
                width: 100%;
            }

            > div:nth-child(2){
                flex: 1;
                > label{
                    height: 100%;
                }
            }
            > div:nth-child(3){
                flex: 1;
            }
            > div:nth-child(4){
                width: 100%;
            }
            > div:nth-child(5){
                width: 100%;
            }
            > div:nth-child(6){
                width: 100%;
            }
            > div:nth-child(7){
                width: 100%;
            }

            >div:last-of-type{
                display: flex;
                gap: 32px;
                width: 100%;
                justify-content: flex-end;
            }
            > div:last-of-type > button:last-of-type{
                width: 200px;
            }
            > div:last-of-type > button:first-of-type{
                width: 200px;
            }
        }
    }
`