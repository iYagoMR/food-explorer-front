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
    
    > label {
        margin: 0;
        display: flex;
        padding: 12px 32px;

        cursor: pointer;
        
        gap: 8px;
        align-items: center;
        justify-content: center;
        
        background: ${({theme}) => theme.COLORS.DARK_800};
        
        border-radius: 8px;
        
        > p{
            color: ${({theme}) => theme.COLORS.LIGHT_100};
            font-size: 14px;
            font-weight: 500;
        }

        > input{
            display: none;
        }

        > svg {
            font-size: 24px;
            color: ${({theme}) => theme.COLORS.LIGHT_100};
        }
    }

    
`