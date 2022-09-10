import { createGlobalStyle } from "styled-components";

// font-family: 'Barlow Condensed', sans-serif;
// font-family: 'Bellefair', serif;

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        overflow-x: hidden;
    }

    body {
        margin: 0 auto;
        max-width: 1440px;
        overflow-x: hidden;
    }
`