import styled from "styled-components";

export const CardsStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 17%;
    padding: 1rem;
    background-color: ${props => props.theme['--gray-200']};
    border-top-right-radius: 3.6rem;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 3.6rem;
    margin: 2rem auto;
    position: relative;
`;

export const ImageCoffeStyle = styled.img`
    margin: -30px 0 0 0;
`;

export const NameCardStyle = styled.p`
    font-size: 0.80rem;
    color: ${props => props.theme['--yellow-800']};
    background-color: ${props => props.theme['--yellow-300']};
    border-radius: 8px;
    padding: 0.20rem 0.35rem;
`;

export const DescriptionCoffeStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0.50rem 0;

    & > h3 {
        font-family: 'Baloo 2', sans-serif;
        font-size: 1.2rem;
        margin: 0;
    }

    & > p {
        color: ${props => props.theme['--gray-600']};
        text-align: center;
        margin-top: 0.20rem;
        font-size: 0.90rem;
    }
`;