import { GlobalDivStyled, DivButtonsStyled, ButtonMaisStyled } from "./Score.s";

export function Score () {
    return (
        <>
            <GlobalDivStyled>
                <h2>Pontuação Atual</h2>
                <h2>00000</h2>
                <DivButtonsStyled>
                    <ButtonMaisStyled>Incrementar</ButtonMaisStyled>    
                    <button>Decrementar</button>    
                </DivButtonsStyled>    
            </GlobalDivStyled>

        </>
    )
}