import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;

    > p{
        color: ${({theme}) => theme.COLORS.LIGHT_400};
        font-size: 16px;
    }
    
    > div{
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        gap: 16px;
        padding: 10px 8px;

        background: ${({theme}) => theme.COLORS.DARK_800};
        border-radius: 8px;
    }

    p{
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

export const Ingredient = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 10px 18px;
    gap: 8px;

    
    background: ${({theme}) => theme.COLORS.LIGHT_600};

    border-radius: 8px;

    > p {
        color: ${({theme}) => theme.COLORS.LIGHT_100};
    }

    > button > svg {
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        font-size: 18px;
    }
`

export const Add = styled.span`
    display: flex;
    background: transparent;

    padding: 10px 16px;
    gap: 8px;

    border-radius: 8px;
    border: dashed 1px ${({theme}) => theme.COLORS.LIGHT_500};
    color: ${({theme}) => theme.COLORS.LIGHT_500};

    > button > svg {
        color: ${({theme}) => theme.COLORS.LIGHT_500};
        font-size: 18px;
    }
`