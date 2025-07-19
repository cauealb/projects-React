import styled from "styled-components";

export const ContainerPanel = styled.div`
    box-shadow: 2px 0 8px ${({ theme }) => theme.colorLines};
    max-width: 70em;
    height: 30em;
    /* display: grid; */
    padding: 1em;
    border: 1px solid ${({ theme }) => theme.colorLines};
    border-radius: 8px;
    overflow-x: hidden;
`;

export const ContainerPanelBuger = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: space-around;
`;
export const FormPanel = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 1em;
`

export const AddNewItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.3em;
    cursor: pointer;

    strong {
        color: ${({ theme }) => theme.bgPrincipal};

        &:hover {
            color: ${({ theme }) => theme.hoverBgPrincipal}
        }
    }
`;

export const Filter = styled.form`
    display: flex;
    gap: 1em;

    input {
        padding: 0.8em;
        border: none;
        background-color: ${({ theme }) => theme.bgInput};
        outline: none;
    }
`