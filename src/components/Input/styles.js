import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 16px;

    > p{
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        font-size: 16px;
        margin-bottom: 8px;
        margin: 0;
    }

    > div {
        display: flex;

        gap: 20px;
        align-items: center;

        padding: 12px 14px;
        
        background: ${({theme}) => theme.COLORS.DARK_800};
        
        border: 0;
        border-radius: 8px;
        

        input{
            width: 100%;

            color: ${({theme}) => theme.COLORS.LIGHT_400};
            background: transparent;
            border: none;

            font-size: 16px;
        }
        input::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }

        > svg {
            margin-left: 16px;
            scale: 1.6;
        }
    }

    
`