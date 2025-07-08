import styled from "styled-components";

interface PropsStyledHeader {
    bgColor: string
}

export const ContainerHeader = styled.header`
    background-color: ${({ theme }) => theme.bg};
`;