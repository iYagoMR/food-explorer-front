import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    gap: 14px;
    border-radius: 8px;
    ${props => props.isNew && `
        flex: 1;
    `}

    background-color: ${({ theme, isNew }) => isNew ? theme.COLORS.LIGHT_600 : "transparent"};

    border: ${({ theme, isNew }) => isNew ? `none` : `1px dashed ${theme.COLORS.LIGHT_600}`};

    > input {
        color: ${({theme}) => theme.COLORS.LIGHT_100};
        font-size: 18px;
        background: none;
        border: none;
        ${props => props.isNew && `
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;  
        `}
        
        width: ${({isNew}) => isNew ? `` : `85px`};

        &::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_500};
        }
    }

    > button > svg {
        color: ${({theme, isNew}) => isNew ? theme.COLORS.LIGHT_100 : theme.COLORS.LIGHT_500};
        font-size: 18px;
    }
`