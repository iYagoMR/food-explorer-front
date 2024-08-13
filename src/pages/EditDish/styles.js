import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    > main {
        padding: 50px 24px;
        
        display: flex;
        flex-direction: column;
        gap: 24px;

        >div:last-of-type{
            display: flex;
            gap: 32px;
        }
        > div:last-of-type > button:last-of-type{
            background: ${( {theme}) => theme.COLORS.TOMATO_400};
        }
        > div:last-of-type > button:first-of-type{
            background: ${( {theme}) => theme.COLORS.DARK_800};
        }
    } 
`