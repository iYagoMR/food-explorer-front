import styled from 'styled-components';

export const Container = styled.div`
    background: ${({ theme }) => theme.COLORS.DARK_600};

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: auto;
    padding: 35px 20px;

    > p{
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 12px;
        font-family: 'Poppins', sans-serif;
        opacity: 0.6;
    }

    h1 {
        color: ${({ theme }) => theme.COLORS.LIGHT_700};
        height: fit-content;
    }
`