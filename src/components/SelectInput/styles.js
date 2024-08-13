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
        position: relative;

        align-items: center;
        justify-content: space-between;

        padding: 12px 14px;
        
        background: ${({theme}) => theme.COLORS.DARK_900};
        
        border: 0;
        border-radius: 8px;

        select{
            width: 100%;

            color: ${({theme}) => theme.COLORS.LIGHT_400};
            background: transparent;
            border: none;

            font-size: 16px;

            appearance: none;
            /* safari */
            -webkit-appearance: none;
            /* other styles for aesthetics */
            width: 100%;
            background-color: transparent;
            border-radius: 0.25rem;
            cursor: pointer;
        }

        > svg {
            position: absolute;
            top: 50%;
            right: 1rem;
            transform: translateY(-50%);
            pointer-events: none; /* Ensure the icon does not block clicks */
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
        }

    }

`