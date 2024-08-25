import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 35px;

    .dishes {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;

        >div{
            flex: 1;

            img {
                width: 11rem;
            }

            .price{
                font-size: 1.9rem;
            }

            h3 {
                font-size: 1.6rem;
            }
        }
    }
`