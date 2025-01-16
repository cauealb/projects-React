import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import imgCoffe from '../../../assets/Logo/ImagemCoffe.svg'
import { SectionPrincipal, DivHeroInfosStyle, SpecificationDivStyle, IconsSpecificationStyle } from "./HeroStyle";

export function Hero() {
    return (
        <>
            <SectionPrincipal>
                <img src={imgCoffe} alt="Café feito pela Coffe Delivery" />
                <div>
                    <DivHeroInfosStyle>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    </DivHeroInfosStyle>
                    <SpecificationDivStyle>
                        <div>
                            <IconsSpecificationStyle color=""><ShoppingCart size={10}/></IconsSpecificationStyle>
                            <p>Compra simples e segura</p>
                        </div>
                        <div>
                            <IconsSpecificationStyle color=""><Package size={10}/></IconsSpecificationStyle>
                            <p>Embalagem mantém o café intacto</p>
                        </div>
                        <div>
                            <IconsSpecificationStyle color=""><Timer size={10}/></IconsSpecificationStyle>
                            <p>Entrega rápida e rastreada</p>
                        </div>
                        <div>   
                            <IconsSpecificationStyle color=""><Coffee size={10}/></IconsSpecificationStyle>
                            <p>O café chega fresquinho até você</p>
                        </div>
                    </SpecificationDivStyle>
                </div>
            </SectionPrincipal>

            <h2>Nossos cafés</h2>
        </>
    )
}