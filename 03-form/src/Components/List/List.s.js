import styled from "styled-components";

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    font-size: 2.2rem;
    width: 20%;
    margin: auto;
    
    background-color: ${props => props.theme['--gray-900']};
    border-radius: 8px;
`;

export const StyledDivParagraph = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    background-color: transparent;
`;

export const StyledParagraph = styled.p`
    background-color: transparent;
    font-size: 1.1rem;
    padding: 0.50rem;
    border-radius: 8px;
    background-color: ${props => props.theme['--gray-700']}; 
`;

export const StyledButtonList = styled.button`
    width: fit-content;
    align-self: flex-end;
    background-color: ${props => props.theme['--green-300']};
    padding: 0.75rem 3rem;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    margin: 1rem 0;
`;