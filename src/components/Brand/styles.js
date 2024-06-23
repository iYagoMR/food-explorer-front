import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: 12px;
    align-content: center;

    > h1 {
        font-family: "Roboto", sans-serif;
        font-size: 37px;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`;