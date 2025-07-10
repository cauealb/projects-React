import styled from "styled-components";

export const ContainerHeader = styled.header`
    background-color: ${({ theme }) => theme.bgPrincipal};
`;

export const ContainerNameCompany = styled.div`
    display: flex;
    gap: 1em;
    align-items: center;
`;