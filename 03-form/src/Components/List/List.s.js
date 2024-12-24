import styled from "styled-components";

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    font-size: 2.2rem;
    width: 20%;
    margin: auto;
    margin-bottom: 1rem;
    
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
    font-size: 1.3rem;
    padding: 0.50rem;
    border-radius: 8px;
    background-color: ${props => props.theme['--gray-700']}; 
    cursor: pointer;
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
    transition: all 0.2s linear;

    &:hover {
        background-color: ${props => props.theme['--green-500']};
    }
`;