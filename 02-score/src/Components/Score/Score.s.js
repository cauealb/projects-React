import styled from "styled-components";

export const GlobalDivStyled = styled.div`
    display: flex;
    gap: 1rem;
    flex-direction: column;
    text-align: center;
    width: 20%;
    margin: 8rem auto;
`;

export const DivButtonsStyled = styled.div`
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
`;

const ButtonsDefault = styled.button`
    border: none;
    cursor: pointer;
    padding: 0.75rem 2rem;
    border-radius: 8px;
    transition: background-color 0.2s linear;
    color: white;
`;

export const ButtonMaisStyled = styled(ButtonsDefault)`
    background-color: ${props => props.theme['--green-300']};

    &:hover {
        background-color: ${props => props.theme['--green-500']};
    }
`;

export const ButtonMenosStyled = styled(ButtonsDefault)`
    background-color: ${props => props.theme['--red-300']};

    &:hover {
        background-color: ${props => props.theme['--red-500']};
    }
`;

export const ButtonSaveStyled = styled(ButtonsDefault)`
    background-color: ${props => props.theme['--orange-300']};

    &:hover{
        background-color: ${props => props.theme['--orange-500']}
    }
`;