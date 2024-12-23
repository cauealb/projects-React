import styled from "styled-components";

export const GlobalDivStyled = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 20%;
    margin: 8rem auto;
`;

export const DivButtonsStyled = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ButtonsDefault = styled.button`
    border: none;
    cursor: pointer;
    padding: 0.75rem 2rem;
    transition: all 0.2s linear;
`;

export const ButtonMaisStyled = styled(ButtonsDefault)`
    
`;

export const ButtonMenosStyled = styled.button`
    
`;