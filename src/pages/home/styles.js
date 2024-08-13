import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100%;

    display: flex;
    flex-direction: column;

    overflow-x: hidden;

    > main {
        padding: 50px 24px;

        display: flex;
        flex-direction: column;

        > .sections {
            display: flex;
            flex-direction: column;
            gap: 30px;
        }
    }
`

export const Banner = styled.div`
    background: linear-gradient(to bottom, #091E26, #00131C);
    border-radius: 3px;
    
    display: flex;
    padding: 30px 17px 20px 15px;
    position: relative;

    margin-bottom: 60px;

    > img {
        position: absolute;

        bottom: 0;
        left: -20px;
        width: 190px;
        height: auto;
    }

    > div {
        display: flex;
        flex-direction: column;
        gap: 7px;
        margin-left: auto;
    }

    h2 {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-weight: 600;
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
    }

    p {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-weight: 400;
        font-family: 'Poppins', sans-serif;
        font-size: 12px;
    }
`

export const DishSection = styled.div`
    display: flex;
    flex-direction: column;

    gap: 25px;

    > h2 {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
    }

    > div {
        display: flex;
        gap: 20px;
        overflow-y: scroll;
        padding-bottom: 20px;
    }
`