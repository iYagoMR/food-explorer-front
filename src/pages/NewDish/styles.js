import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    > main {
        padding: 50px 24px;

        display: flex;
        flex-direction: column;
        gap: 24px;

        > button:last-of-type{
            background: ${( {theme}) => theme.COLORS.TOMATO_400};
        }
    } 
`