import {createGlobalStyle} from "styled-components";

export const GlobalCSS = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 62.5%;
        background-color: ${props => props.theme['--gray-800']};
        color: white
    }
`;