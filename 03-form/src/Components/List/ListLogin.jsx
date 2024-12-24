import { StyledSection, StyledParagraph, StyledButtonList, StyledDivParagraph } from "./List.s";

export function List({infos, editFunction}) {

    function handleClickChange () {
        editFunction(infos.pass)
    }

    return (
        <>
            <StyledSection>
                <StyledDivParagraph>
                    <StyledParagraph>{infos.user}</StyledParagraph>
                    <StyledParagraph>{infos.pass}</StyledParagraph>
                </StyledDivParagraph>
                <StyledButtonList onClick={handleClickChange}>Change</StyledButtonList>
            </StyledSection>
        </>
    )
}