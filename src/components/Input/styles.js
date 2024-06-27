import styled from "styled-components";

export const Container = styled.div`
    width: 100%;

    > p{
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        font-size: 16px;
        margin-bottom: 8px;
    }

    > div {
        height: 40px;
        display: flex;

        gap: 20px;
        align-items: center;

        padding: 12px 16px;
        
        background: ${({theme}) => theme.COLORS.DARK_900};
        
        border: 0;
        border-radius: 8px;
        

        > input{
            width: 100%;

            color: ${({theme}) => theme.COLORS.LIGHT_500};
            background: transparent;
            border: none;

            font-size: 16px;

            &:placeholder {
                color: ${({ theme }) => theme.COLORS.GRAY_300};
            }
        }

        > svg {
            margin-left: 16px;
            scale: 1.6;
        }
    }

    
`