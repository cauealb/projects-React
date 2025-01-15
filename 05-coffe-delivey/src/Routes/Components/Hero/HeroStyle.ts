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
    color: ${props => props.theme['--gray-800']};   
`;

export const DivHeroInfosStyle = styled.div`
    line-height: 1.2;

    & > h1 {
        font-family: "Baloo 2", sans-serif;
        color: ${props => props.theme['--gray-900']};
        font-size: 3rem;
        margin: 0;
    }

    & > p {
        font-size: 1.3rem;
        margin: 0;
    } 
`