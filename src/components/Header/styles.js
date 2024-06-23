import styled from 'styled-components';
import { Brand } from '../../components/Brand';

export const Container = styled.div`
    width: 100%;
    height: 100px;
    padding: 50px 28px 28px 28px;
    
    background-color: ${( {theme}) => theme.COLORS.DARK_700};
    
    display: flex;
    justify-content: space-between;

    > svg{
        background-color: ${( {theme}) => theme.COLORS.LIGHT_100};
        width: 24px;
    }

    h1 {
        font-size: 21px;
    }
        
`
