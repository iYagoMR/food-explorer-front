import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: fit-content;

    gap: 12px;

    margin-bottom: 16px;

    > a {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        
        display: flex;
        gap: 5px;
        justify-content: left;
        align-items: center;

        > svg {
            font-size: 2rem;
        }

        > span {
            font-size: 1.8rem;
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
        }
    }

    > h1{
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 3rem;
        font-weight: 400;
        font-family: 'Poppins', sans-serif;
    }

    @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
        h1 {font-size: 2.6rem;}

        > a {
            > svg {
                font-size: 1.6rem;
            }
            > span {
                font-size: 1.5rem;
            }
        }
    }
`