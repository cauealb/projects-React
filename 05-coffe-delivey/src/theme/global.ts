import {createGlobalStyle} from "styled-components";

export const CSSGlobalDefault = createGlobalStyle`
    html {
        min-height: 100vh;
    }

    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;

        font-size: 62.5%;
        font-family: sans-serif
    }
`