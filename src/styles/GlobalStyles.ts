import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: var(--white);
        scroll-margin: 20vh;
    }
    html, body, #root {
        max-height: 100vh;
        max-width: 100vw;

        width: 100%;
        height: 100%;
    }
    *, button, input {
        border: 0;
        background: none;
        font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    html {
        background: var(--primary);
        scroll-behavior: smooth;
    }
    :root {
        --primary: #09050f;
        --secondary: #1d1929;
        --search: #202327;
        --white: #d0d5d7;
        --gray: #717f7d;
        --outline: #2f3336;
        --share: #00c060;
        --like: #e8265e;
        --eczabyte: #8732dc;
        --eczabyte-dark-hover: #190b28;
        --eczabyte-light-hover: #9078dd;
    }
`;
