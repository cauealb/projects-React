    import { useState } from "react";
    import { GlobalDivStyled, DivButtonsStyled, ButtonMaisStyled, ButtonMenosStyled, ButtonSaveStyled } from "./Score.s";

    export function Score ({functionClick}) {

        const [numberScore, setNumberScore] = useState(0)

        function clickForIncrement() {
            setNumberScore(numberScore + 1)
        }

        function clickForDecrement() {
            if (numberScore > 0) {
                setNumberScore(numberScore - 1)
            } 
        }

        function SaveIncrement () {
            if (numberScore > 0) {
                functionClick(numberScore)
                setNumberScore(0)
            }
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
                        <ButtonMenosStyled onClick={clickForDecrement}>Decrementar</ButtonMenosStyled> 
                        <ButtonSaveStyled onClick={SaveIncrement}>Salvar</ButtonSaveStyled>   
                    </DivButtonsStyled>    
                </GlobalDivStyled>

            </>
        )
    }