import styled from 'styled-components';
import { DEVICE_WIDTH } from '../../styles/deviceWidth';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;

    main {
        display: flex;
        flex-direction: column;
        max-width: ${DEVICE_WIDTH.MAX};
        width: 100%;
        overflow-x: hidden;
        
        margin: 0 auto;
        padding: 50px 24px;

        .table-wrapper{
            overflow-x: scroll;
            padding-bottom: 18px;

            table{
                color: ${({theme}) => theme.COLORS.LIGHT_100};
                min-width: max-content;
                text-align: left;
                border-collapse: collapse;
                border-radius: 8px;
                width: 100%;

                .items{
                    display: flex;
                    gap: 6px;
                }
            }

            tr {

                td:nth-child(3){
                    max-width: 400px;
                }

                td:first-child{
                    display: flex;
                    align-items: center;
                    gap: 8px;
    
                    svg{
                        font-size: 19px;
                    }
                }
            }
            

            th, td {
                border: 1px solid ${({theme}) => theme.COLORS.DARK_1000};
            }

            td {
                padding: 16px 24px;
                overflow: hidden; /* Ensures that text does not overflow */
                text-overflow: ellipsis; /* Adds ellipsis if text overflows */
                white-space: nowrap; /* Keeps text on one line */
            }

            th {
                padding: 8px 24px;
                overflow: hidden; /* Ensures that text does not overflow */
                text-overflow: ellipsis; /* Adds ellipsis if text overflows */
                white-space: nowrap; /* Keeps text on one line */
            }
        }
    }
`;