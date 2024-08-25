import styled from 'styled-components';

export const Container = styled.p`
    background: ${({ theme }) => theme.COLORS.DARK_1000};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;
    
    padding: 5px 10px;
    border-radius: 5px;
    
`