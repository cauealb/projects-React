import express from '../../../assets/SvgCoffe/Type=Expresso.svg'
import { CardsStyle, NameCardStyle, DescriptionCoffeStyle, ImageCoffeStyle } from './CardsStyle'
import { ShoppingCart } from 'phosphor-react'

export function Cards() {
    return (
        <>
            <CardsStyle>
                <header>
                    <ImageCoffeStyle src={express} />
                </header>
                <NameCardStyle>Tradicional</NameCardStyle>
                <DescriptionCoffeStyle>
                    <h3>Expresso Tradicional</h3>
                    <p>O tradicional café feito com água quente e grãos moídos</p>
                </DescriptionCoffeStyle>
                <footer>
                    <div>
                        <span>r$</span>
                        <p>R$9,90</p>
                    </div>
                    <input type="number" min={1}/>
                    <button><ShoppingCart size={30} color='#fff' weight='fill'/></button>
                </footer>
            </CardsStyle>
        </>
    )
}