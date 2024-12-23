import { useState } from "react";
import { GlobalDivStyled, DivButtonsStyled, ButtonMaisStyled, ButtonMenosStyled } from "./Score.s";

export function Score () {

    const [numberScore, setNumberScore] = useState(0)

    function clickForIncrement() {
        setNumberScore(numberScore + 1)
    }

    return (
        <>
            <GlobalDivStyled>
                <div>
                    <h2>Pontuação Atual</h2>
                    <h2>{numberScore}</h2>
                </div>
                <DivButtonsStyled>
                    <ButtonMaisStyled onClick={clickForIncrement}>Incrementar</ButtonMaisStyled>    
                    <ButtonMenosStyled>Decrementar</ButtonMenosStyled>    
                </DivButtonsStyled>    
            </GlobalDivStyled>

        </>
    )
}