import styled from "styled-components";

export const CardsStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: fit-content;
    padding: 1rem;
    background-color: ${props => props.theme['--gray-200']};
    border-top-right-radius: 3.6rem;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 3.6rem;
    margin: 2rem auto;
    position: relative;
`;