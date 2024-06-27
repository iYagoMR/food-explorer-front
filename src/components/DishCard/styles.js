import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;

    padding: 10px 17px;
    gap: 12px;

    > svg:first-child {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        position: absolute;
        top: 0;
        right: 0;
    }

    > img {
        width: 88px;
        height: auto;
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
`