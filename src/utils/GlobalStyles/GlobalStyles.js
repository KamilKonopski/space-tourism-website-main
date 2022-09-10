import { createGlobalStyle } from "styled-components";

// font-family: 'Barlow', sans-serif;
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
        overflow-x: hidden;
    }
`