import styled from "styled-components";

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75%;
    max-width: 1440px;
    margin: 1.2rem auto;
    padding: 1rem;
`;

export const HeaderStyleDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

export const ParagraphStyle = styled.p`
    background-color: ${props => props.theme['--purple-300']};
    display: flex;
    font-size: 1.2rem;
    color: ${props => props.theme['--purple-800']};
    align-items: center;
    padding: 0.30rem 0.50rem;
    border-radius: 8px;
`;

export const PayStyle = styled.span`
    padding: 0.30rem 0.50rem;
    background-color: ${props => props.theme['--yellow-300']};
    border-radius: 8px;
`;