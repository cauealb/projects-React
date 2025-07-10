import styled from "styled-components";

export const ContainerPanel = styled.div`
    box-shadow: 2px 0 8px ${({ theme }) => theme.colorLines};
    max-width: 70em;
    display: grid;
    padding: 1em;
    border: 1px solid ${({ theme }) => theme.colorLines};
    border-radius: 8px;
`;

export const ContainerPanelBuger = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: space-around;
`;