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

export const FooterInputStyle = styled.footer`
    display: flex;
`;

export const PriceStyleDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: fit-content;
    gap: 0.20rem;
    color: ${props => props.theme['--gray-800']};

    & > span {
        text-transform: uppercase;
        margin-bottom: 0.65rem;
        font-size: 0.80rem;
    }

    & > p {
        font-size: 1.6rem;
        margin: 0;
        font-weight: bold;
        font-family: 'Baloo 2', sans-serif;
    }
`;

export const InputQTDStyle = styled.input`
    width: 20%;
    border: none;
    outline: none;
    border-radius: 8px;
    background-color: ${props => props.theme['--gray-400']};
    box-sizing: border-box;
    padding: 0.50rem;
    text-align: center;
`;

export const ButtonPayStyle = styled.button`
    display: flex;
    align-items: center;
    cursor: pointer;
    border: none;
    background-color: ${props => props.theme['--purple-800']};
    border-radius: 8px;
    transition: background-color 0.2s linear;

    &:hover {
        background-color: ${props => props.theme['--purple-500']}
    }
`;