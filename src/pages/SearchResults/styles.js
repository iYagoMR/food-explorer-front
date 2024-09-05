import styled from 'styled-components';
import { DEVICE_WIDTH } from '../../styles/deviceWidth';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 35px;

    main {
        max-width: ${DEVICE_WIDTH.MAX};
        padding: 0 28px;
        margin: auto;
        width: 100%;
    }

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