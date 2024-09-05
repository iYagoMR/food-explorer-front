import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    .tab-header{
        display: flex;
        gap: 28px;
        border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_900};

        > button{
            background: none;
            padding: 0 0 16px 0;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            border: none;
            font-size: 15px;
            opacity: 0.5;
        }

        .active-tab{
            border-bottom: 2px solid;
            opacity: 1;
        }
    }

    .tab-wrapper{
        margin-top: 30px;
    }
`