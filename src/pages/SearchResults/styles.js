import styled from 'styled-components';
import { DEVICE_WIDTH } from '../../styles/deviceWidth';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 35px;

    main {
        max-width: ${DEVICE_WIDTH.MAX};
        padding: 0 28px;
        margin: 0 auto;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .dishes {
        display: flex;
        flex-wrap: wrap;
        gap: 30px;

        h1{
            color: ${( { theme } ) => theme.COLORS.LIGHT_100};
            font-size: 20px;
            font-weight: 400;
            text-align: center;
        }

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