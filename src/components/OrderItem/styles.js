import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;

    img{
        width: 70px;
    }
    > div{
        display: flex;
        flex-direction: column;
        gap: 6px;
    }
    .order-description{
        display: flex;
        gap: 12px;
        align-items: center;
    }
    span,h3{
        color: ${({ theme }) =>  theme.COLORS.LIGHT_100};
    }
    span:first-child, h3{
        font-size: 20px;
        font-weight: 500;
    }
    span:last-child{
        color: ${({ theme }) =>  theme.COLORS.LIGHT_400};
        font-size: 12px;
    }

    button{
        border: none;
        background: none;
        color: ${({ theme }) =>  theme.COLORS.TOMATO_400};
        font-size: 14px;
        width: fit-content;
    }

`