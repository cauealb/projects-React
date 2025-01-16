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

export const SpecificationDivStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    font-size: 0.85rem;
    margin-top: 2rem;

    & div {
        display: flex;
        align-items: center;
        gap: 0.50rem;
        width: 40%
    }
`;

const colorsInfos = {
    yellow: '--yellow-300',
    yellow2: '--yellow-500',
    gray: '--gray-900',
    purple: '--purple-500'
} as const 

interface PropsInfos {
    color: keyof typeof colorsInfos
}

export const IconsSpecificationStyle = styled.span<PropsInfos>`
    border-radius: 50%;
        display: inline-block; 
        background-color: black;
        padding: 0.40rem 0.50rem;
        margin: 0;
`;