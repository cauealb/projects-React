import { StyledSection, StyledParagraph, StyledButtonList, StyledDivParagraph } from "./List.s";

export function List() {
    return (
        <>
            <StyledSection>
                <StyledDivParagraph>
                    <StyledParagraph>User</StyledParagraph>
                    <StyledParagraph>Password</StyledParagraph>
                </StyledDivParagraph>
                <StyledButtonList>Change</StyledButtonList>
            </StyledSection>
        </>
    )
}