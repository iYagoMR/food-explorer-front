import styled from 'styled-components';
import { DEVICE_WIDTH } from '../../styles/deviceWidth';

export const Container = styled.div`
    main {
        padding: 50px 28px;
        max-width: ${DEVICE_WIDTH.MAX};
        width: 100%;
        margin: 0 auto;

        display: flex;
        flex-direction: column;
        gap: 40px;
    }



    .delivery{
        display: flex;
        justify-content: space-between;
        align-items: center;

        h3{
            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            font-weight: 400;
        }

        > .address{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            >div{
                display: flex;
                flex-direction: column;
                gap: 6px;
            }

            button{
                color: ${({ theme }) => theme.COLORS.TOMATO_400};
                padding: 0;
                border: none;
                background: none;
            }

            span{
                font-size: 14px;
                color: ${({ theme }) => theme.COLORS.LIGHT_400};
                font-weight: 300;
            }
        }

        > .add{
            display: flex;
            justify-content: space-between;
            width: 100%;
            padding: 0;
            border: none;
            background: none;

            svg{
                color: ${({ theme }) => theme.COLORS.LIGHT_100};
            }
        }

    }

    .takeout {
        display: flex;
        flex-direction: column;
        gap: 6px;

        h3{
            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            font-weight: 400;
            
        }
        span{
            font-size: 16px;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            font-weight: 600;
        }
    }

    .payment-info, .order-items{
        h1{
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            font-size: 20px;
            font-weight: 400;
            margin-bottom: 25px;
        }

        border-top: 1px solid ${({ theme }) => theme.COLORS.DARK_900};
        padding-top: 14px;
    }

    .order-items {
        ul{
            display: flex;
            flex-direction: column;
            gap: 20px;
        }

        p{
            color: ${({ theme }) =>  theme.COLORS.LIGHT_100};
            margin-top: 23px;
            font-size: 18px;
            
        }
    }
    

    .payment-types {
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
        border-radius: 10px;

        .tab-header{
            margin-top: 0;
            justify-content: space-between;
            gap: 0;
    
            > button{
                background: none;
                padding: 16px;
                color: ${({ theme }) => theme.COLORS.LIGHT_600};
                border-bottom: 1px solid;
                font-size: 15px;
                opacity: 1;
                flex: 1;
            }

            >button:last-child{
                border-left: 1px solid;
            }

            /* Apply border radius to the first and last button */
            > button:first-child.active-tab {
                border-top-left-radius: 10px; 
            }

            > button:last-child.active-tab {
                border-top-right-radius: 10px;
            }
    
            .active-tab{
                border-radius: inherit;
                background: ${({ theme }) => theme.COLORS.DARK_800};
            }
        }

        .tab-wrapper{
            margin-top: 0;
            padding: 25px 20px;
            border-top: none;

            form{
                display: flex;
                flex-wrap: wrap;
                flex-direction: row;
                gap: 25px;

                >div >div{
                    background: none;
                    border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_400};
                }

                > div:nth-child(1){
                    width: 100%;
                }
                > div:nth-child(2){
                    flex: 1;
                }
                > div:nth-child(3){
                    flex: 1;
                }
                > div:nth-child(4){
                    width: 100%;
                }

                > button{
                    margin-top: 25px;
                }
            }
        }
    }
    
    
`