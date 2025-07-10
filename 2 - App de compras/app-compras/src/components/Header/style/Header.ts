import styled from "styled-components";

export const ContainerHeader = styled.header`
    display: grid;
    grid-auto-flow: column;
    background-color: ${({ theme }) => theme.bgPrincipal};
    padding-inline: 1em;
`;

export const ContainerNameCompany = styled.div`
    display: flex;
    gap: 1em;
    align-items: center;
    
    h1 {
        color: ${({ theme }) => theme.colorWhite};
        font-size: 1.6em;
    }
`;

export const ContainerInfos = styled.div`
    display: flex;
    gap: 1em;
    justify-content: flex-end;
    align-items: center;

    div {
        display: flex;
        gap: 0.80em;
        align-items: center;
        color: ${({ theme }) => theme.colorWhite};

        img{
            width: 40px;
            height: 40px;
            object-fit: cover;
            border-radius: 50%;
        }
    }
`