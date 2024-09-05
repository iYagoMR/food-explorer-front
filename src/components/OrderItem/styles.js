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
        width: 100%;
    }
    .order-description{
        display: flex;
        gap: 12px;
        align-items: center;
        justify-content: space-between;
    }
    h3{
        color: ${({ theme }) =>  theme.COLORS.LIGHT_100};
        font-size: 1.5rem;
        font-weight: 500;
    }
    span{
        color: ${({ theme }) =>  theme.COLORS.LIGHT_400};
        font-size: 1.4rem;
        min-width: max-content;
    }
    button{
        border: none;
        background: none;
        color: ${({ theme }) =>  theme.COLORS.TOMATO_400};
        font-size: 15px;
        width: fit-content;
    }

`