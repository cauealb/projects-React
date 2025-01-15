import styled from "styled-components";

export const SectionPrincipal = styled.section`
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    width: 75%;
    max-width: 1440px;
    margin: auto;
    padding: 0.75rem;
    box-sizing: border-box;

    & h1 {
      font-family: "Baloo 2", sans-serif;
      font-size: 3rem;
      margin-top: 0;
    }
`;