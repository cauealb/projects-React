import express from '../../../assets/SvgCoffe/Type=Expresso.svg'
import { CardsStyle, NameCardStyle } from './CardsStyle'

export function Cards() {
    return (
        <>
            <CardsStyle>
                <header>
                    <img src={express} />
                </header>
                <NameCardStyle>Tradicional</NameCardStyle>
                <div>
                    <h3>Expresso Tradicional</h3>
                    <p>O tradicional café feito com água quente e grãos moídos</p>
                </div>
                <footer>
                    <p>R$9,90</p>
                    <input type="number" />
                    <button>Enviar</button>
                </footer>
            </CardsStyle>
        </>
    )
}