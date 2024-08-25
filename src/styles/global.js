import { createGlobalStyle } from "styled-components";
import { DEVICE_BREAKPOINTS } from "./deviceBreakpoints";

export default createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }

    :root {
        font-size: 10px;

        @media (min-width: ${DEVICE_BREAKPOINTS.MD}){
            font-size: 12px;
        }
        @media (min-width: ${DEVICE_BREAKPOINTS.LG}){
            font-size: 14px;
        }
        @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
            font-size: 9px;
        }
        
    }

    #root{
    }

    body {
        background-color: ${({ theme }) =>  theme.COLORS.DARK_400};
        color: ${({ theme }) => theme.COLORS.WHITE};
        

        -webkit-font-smoothing: antialiased;
        
    }
    
    body, input, button, textarea {
        font-family: 'Roboto', serif;
        font-size: 16px;
    }

    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }

    .page-wrapper{
        padding: 0 28px;
    }

`