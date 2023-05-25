import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        font-family: 'Roboto', system-ui, Helvetica, Arial, sans-serif;
        --bs-blue: #1f78b4;
        --bs-indigo: #8C52FF;
        --bs-purple: #834be1;
        --bs-pink: #e14bdb;
        --bs-red: #f02222;
        --bs-orange: #ff7400;
        --bs-yellow: #ffda00;
        --bs-green: #8eb936;
        --bs-teal: #20c997;
        --bs-cyan: #0dcaf0;
        --bs-white: #fff;
        --bs-gray: #6c757d;
        --bs-gray-dark: #343a40;
        --bs-gray-100: #f8f9fa;
        --bs-gray-200: #e9ecef;
        --bs-gray-300: #dee2e6;
        --bs-gray-400: #ced4da;
        --bs-gray-500: #adb5bd;
        --bs-gray-600: #6c757d;
        --bs-gray-700: #495057;
        --bs-gray-800: #343a40;
        --bs-gray-900: #212529;
        --bs-primary: #1f78b4;
        --bs-secondary: #6c757d;
        --bs-success: #8eb936;
        --bs-info: #0dcaf0;
        --bs-warning: #ffda00;
        --bs-danger: #f02222;
        --bs-light: #f8f9fa;
        --bs-dark: #212529;
    }
    *{
        margin: 0;
        padding: 0;
        text-decoration: none;
    }

`