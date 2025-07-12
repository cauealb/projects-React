import styled from "styled-components";

export const ButtonStyle = styled.button`
    background-color: ${({ theme }) => theme.bgPrincipal};
    border: none;
    border-radius: 8px;
    outline: none;
    color: ${({ theme }) => theme.colorWhite};
    padding: 0.30em 8em;
    font-weight: bold;
    letter-spacing: 0.09em
`;