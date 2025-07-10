import styled from "styled-components";

export const ContainerBuger = styled.article`
    display: grid;
    align-items: center;
    width: fit-content;
`;

export const ContainerIMG = styled.div`
    border: 2px solid ${({ theme }) => theme.colorLines};
    border-radius: 8px;

    img {
        width: 10em
    }
`;

export const ContainerInfosBurger = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    
    strong {
        letter-spacing: 1px
    }

    span {
        color: ${({ theme }) => theme.bgPrincipal};
        font-weight: bold;
    }
`