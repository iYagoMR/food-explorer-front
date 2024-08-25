import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    > label{
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        font-size: 16px;
    }
    
    > div{
        display: flex;
        align-items: center;
        flex-wrap: wrap;

        gap: 16px;
        padding: 13px;

        background: ${({theme}) => theme.COLORS.DARK_800};
        border-radius: 8px;
    }

    p, label{
        font-size: 16px;
    }

    button {
        padding: 0;
        border: none;
        background: none;

        display: flex;
        justify-content: center;
        align-items: center;
    }
`