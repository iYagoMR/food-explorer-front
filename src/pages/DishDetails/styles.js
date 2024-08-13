import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    
    main {
        padding: 50px 24px;
        display: flex;
        flex-direction: column;
    }

    .wrapper {
        display: flex;
        flex-direction: column;

        align-items: center; // Centering content horizontally

        gap: 20px;
        
        img {
            width: 263px;
            height: auto;
        }
        
        h1 {
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            font-size: 30px;
            font-weight: 500;
            font-family: 'Poppins' sans-serif;
        }

        p:first-of-type{
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            font-size: 16px;
            line-height: 140%;
            font-family: 'Poppins', sans-serif;
        }


        .dish-description {
            display: flex;
            flex-direction: column;
            gap: 24px;
            align-items: center;
            text-align: center;

            .ingredients{
                gap: 24px;
                display: flex;
                flex-wrap: wrap;
                
                justify-content: center;
            }
            
            div:last-child{
                margin-top: 25px;
                display: flex;
                gap: 28px;

                .quantity {
                    display: flex;
                    align-content: center;
                    align-items: center;
                    gap: 20px;

                    h4{
                        color: ${({ theme }) => theme.COLORS.LIGHT_100};
                        font-size: 22px;
                        font-weight: 500;
                    }

                    button {
                        background: none;
                        border: none;
                        color: ${({ theme }) => theme.COLORS.LIGHT_100};
                    }
                }
                
                > button{
                    color: ${({ theme }) => theme.COLORS.LIGHT_300};
                    font-size: 16px;
                    font-weight: 500;
                    font-family: 'Poppins' sans-serif;

                    padding: 8px 16px;

                }
            }
        }  

    }  

`