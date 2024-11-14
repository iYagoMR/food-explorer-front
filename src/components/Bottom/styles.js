import styled from 'styled-components';
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints';
import { DEVICE_WIDTH } from '../../styles/deviceWidth';

export const Container = styled.div`
    background: ${({ theme }) => theme.COLORS.DARK_600};
    width: 100%;
    display: flex;
    margin-top: auto;

    > div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        width: 100%;
        max-width: ${DEVICE_WIDTH.MAX};

        margin: 0 auto;
        padding: 35px 20px;
    }

    p{
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 12px;
        font-family: 'Poppins', sans-serif;
        opacity: 0.6;
    }

    h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_700};
        height: fit-content;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
        > div{
            flex-direction: column;
            gap: 20px;
        }
    }
`