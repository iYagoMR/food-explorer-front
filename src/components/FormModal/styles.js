import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 998;

    display: none;

    background: rgba(255, 255, 255, 0.3);

    &[data-open-modal="true"]{
        display: flex;
    }

    > div{
        position: absolute;
        z-index: 999;
        background: ${({theme}) => theme.COLORS.DARK_100};
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        width: 80%;
        min-width: 200px;

        display: flex;
        flex-direction: column;
        gap: 45px;

        padding: 30px;
        border-radius: 8px;



        .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;

            h1{
                color: ${({theme}) => theme.COLORS.LIGHT_100};
                font-size: 25px;
                font-weight: 400;
            }

            button{
                border: none;
                background: none;
                display: flex;
                align-items: center;

                svg{
                    color: ${({theme}) => theme.COLORS.LIGHT_100};
                    font-size: 35px;
                }
            }
        }

        .inputs{
            display: flex;
            flex-direction: column;
            gap: 30px;
        }
    }

`