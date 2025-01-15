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
`;

const colorsSpecification = {
    'yellow-dark': '--yellow-500',
    'yellow-light': '--yellow-300',
    'gray-dark': '--gray-900',
    'purple-dark': '--purple-800',
} as const

export const SpecificationDivStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    font-size: 1.1rem;

    & span {
        border-radius: 50%;
        display: inline-block; 
        background-color: black;
        padding: 1rem;
    }
`;