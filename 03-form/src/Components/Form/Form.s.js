import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 20%;
    margin: 0.90rem auto;
    font-size: 2.2rem;
    padding: 0.75rem;

    background-color: ${props => props.theme['--gray-100']};
    border: 1px solid ${props => props.theme['--gray-300']};
    border-radius: 8px;

    input {
        margin-top: 0.20rem
    }
`;

export const StyledLabel = styled.label`
    margin-top: 1rem;
    background-color: transparent;
    color: ${props => props.theme['--gray-900']};
`;

export const StyledInput = styled.input`
    outline: none;
    border-radius: 4px;
    color: ${props => props.theme['--gray-100']};
    padding: 0.50rem;
    font-size: 1.3rem;
`;