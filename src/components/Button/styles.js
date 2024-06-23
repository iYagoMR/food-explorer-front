import style from 'styled-components';

export const Container = style.button
`
    width: 100%;
    background-color: ${({ theme }) => theme.COLORS.TOMATO_100};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    border: none;
    border-radius: 5px;
    font-size: 14px;
    font-weight: 500;

    padding: 15px 12px;
    height: 48px;
`