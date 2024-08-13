import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    gap: 18px;

    margin-bottom: 16px;

    > a {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        
        display: flex;
        gap: 5px;
        justify-content: left;
        align-items: center;

        > svg {
            font-size: ${({ hastitle }) => (hastitle ? '15px' : '27px')};
        }

        > span {
            font-size: ${({ hastitle }) => (hastitle ? '16px' : '22px')};
            font-family: 'Poppins', sans-serif;
            font-weight: 400;
        }
    }

    > h1{
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 32px;
        font-weight: 400;
        font-family: 'Poppins', sans-serif;
    }
`