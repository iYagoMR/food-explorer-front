import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    display: ${({ isclosed }) => (isclosed ? 'none' : 'flex')};
    gap: 12px;
    align-content: center;

    > h1 {
        font-family: "Roboto", sans-serif;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
`;