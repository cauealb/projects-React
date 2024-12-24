import { StyledSection, StyledParagraph, StyledButtonList, StyledDivParagraph } from "./List.s";

export function List({infos}) {

    return (
        <>
            <StyledSection>
                <StyledDivParagraph>
                    <StyledParagraph>{infos.user}</StyledParagraph>
                    <StyledParagraph>{infos.pass}</StyledParagraph>
                </StyledDivParagraph>
                <StyledButtonList>Change</StyledButtonList>
            </StyledSection>
        </>
    )
}