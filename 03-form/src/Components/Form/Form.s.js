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
`;

export const StyledLabel = styled.label`
    margin-top: 1.4rem;
    background-color: transparent;
    color: inherit;
`;

export const StyledInput = styled.input`
    margin-top: 0.20rem;
    outline: none;
    border-radius: 4px;
    color: inherit;
    padding: 0.50rem;
    font-size: 1.3rem;
    border: none;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;

    &:focus {
        border-bottom: 1px solid ${props => props.theme['--green-500']}
    }
`;

export const StyledButton = styled.button`
    cursor: pointer;
    border: none;
    border-radius: 8px;
    background-color: ${props => props.theme['--green-300']};
    padding: 0.75rem 3rem;
    margin-top: 1.2rem;
    width: fit-content;
    align-self: center;
    transition: all 0.2s linear;

    &:hover {
        background-color: ${props => props.theme['--green-500']};
    }
`;