import { GlobalDivStyled, DivButtonsStyled, ButtonMaisStyled, ButtonMenosStyled } from "./Score.s";

export function Score () {
    return (
        <>
            <GlobalDivStyled>
                <div>
                    <h2>Pontuação Atual</h2>
                    <h2>00000</h2>
                </div>
                <DivButtonsStyled>
                    <ButtonMaisStyled>Incrementar</ButtonMaisStyled>    
                    <ButtonMenosStyled>Decrementar</ButtonMenosStyled>    
                </DivButtonsStyled>    
            </GlobalDivStyled>

        </>
    )
}