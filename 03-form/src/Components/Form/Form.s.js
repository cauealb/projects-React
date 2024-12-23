import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 20%;
    margin: 0.90rem auto;
    font-size: 2.2rem;
    padding: 0.75rem;
    color: ${props => props.theme['--gray-100']};

    background-color: ${props => props.theme['--gray-900']};
    border-radius: 8px;
    box-shadow: 0 7px 10px ${props => props.theme['--gray-700']};

    input {
        margin-top: 0.20rem
    }
`;

export const StyledLabel = styled.label`
    margin-top: 1rem;
    background-color: transparent;
    color: inherit;
`;

export const StyledInput = styled.input`
    outline: none;
    border-radius: 4px;
    color: inherit;
    padding: 0.50rem;
    font-size: 1.3rem;
    border: none;
`;