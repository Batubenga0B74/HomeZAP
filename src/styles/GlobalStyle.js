import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        border-bottom: none;
    }
    body{
        background-color:#000 ;
    }
    a{
        color: #fff;
        text-transform: uppercase;
        font-size: 15px;
    }
    
   
`;