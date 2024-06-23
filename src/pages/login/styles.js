import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    gap: 73px;
    padding: 160px 65px 0 65px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 32px;
    justify-content: center;
    align-items: center;
`;

export const Brand = styled.div`
    display: flex;
    gap: 12px;
    align-content: center;

    > img {
        width: 43px;
    }

    > h1 {
        font-family: "Roboto", sans-serif;
        font-size: 37px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`;