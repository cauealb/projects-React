import styled from "styled-components";

export const HeaderStyle = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 75%;
    max-width: 1440px;
    margin: 1.2rem auto;
    padding: 1rem;
    box-sizing: border-box;
`;

export const HeaderStyleDiv = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 1rem;
`;

export const ParagraphStyle = styled.p`
    background-color: ${props => props.theme['--purple-300']};
    display: flex;
    font-size: 1.2rem;
    color: ${props => props.theme['--purple-800']};
    align-items: center;
    padding: 0.60rem 0.80rem;
    border-radius: 8px;
    cursor: pointer;
`;

export const PayStyle = styled.span`
    padding: 0.40rem 0.60rem;
    background-color: ${props => props.theme['--yellow-300']};
    border-radius: 8px;
    margin-top: 1.2rem;
    cursor: pointer;
`;