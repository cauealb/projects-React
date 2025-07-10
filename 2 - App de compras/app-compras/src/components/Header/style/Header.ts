import styled from "styled-components";

export const ContainerHeader = styled.header`
    background-color: ${({ theme }) => theme.bgPrincipal};
`;

export const ContainerNameCompany = styled.div`
    display: flex;
    gap: 1em;
    align-items: center;
    padding-inline: 1em;
    
    h1 {
        color: ${({ theme }) => theme.colorWhite};
        font-size: 1.6em;
    }
`;