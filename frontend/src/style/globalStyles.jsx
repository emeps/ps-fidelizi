import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        font-family: 'Roboto', system-ui, Helvetica, Arial, sans-serif;
        --bs-indigo: #8C52FF;
        --bs-purple:#492b7c;
        --bs-white: #fff;
        --bs-white-100: #f5f5f5;
        --bs-gray-100: #b3b3b3;
        --bs-gray: #868686;
        --bs-gray-600: ##777;   
        --bs-green-hover: #025802;
        --bs-green: #8eb936;    
        --bs-purple-bold: #180133;
    }
    *{
        margin: 0;
        padding: 0;
        text-decoration: none;
        box-sizing: border-box;
    }
    body{
        background-color: var(--bs-white-100);
        display: flex;
        place-content: center;
        place-items: center;
    }

`