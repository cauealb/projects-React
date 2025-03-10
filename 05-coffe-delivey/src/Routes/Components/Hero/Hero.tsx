import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import imgCoffe from '../../../assets/Logo/ImagemCoffe.svg'
import { SectionPrincipal, DivHeroInfosStyle, SpecificationDivStyle, IconsSpecificationStyle, WapperStyled } from "./HeroStyle";

export function Hero() {
    return (
        <>
        <WapperStyled>
           <SectionPrincipal>
                <img src={imgCoffe} alt="Café feito pela Coffe Delivery" />
                <div>
                    <DivHeroInfosStyle>
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    </DivHeroInfosStyle>
                    <SpecificationDivStyle>
                        <div>
                            <IconsSpecificationStyle color="yellow2"><ShoppingCart size={17} weight="fill" color="#fff"/></IconsSpecificationStyle>
                            <p>Compra simples e segura</p>
                        </div>
                        <div>
                            <IconsSpecificationStyle color="gray"><Package size={17} weight="fill" color="#fff"/></IconsSpecificationStyle>
                            <p>Embalagem mantém o café intacto</p>
                        </div>
                        <div>
                            <IconsSpecificationStyle color="yellow"><Timer size={17} weight="fill" color="#fff"/></IconsSpecificationStyle>
                            <p>Entrega rápida e rastreada</p>
                        </div>
                        <div>   
                            <IconsSpecificationStyle color="purple"><Coffee size={17} weight="fill" color="#fff"/></IconsSpecificationStyle>
                            <p>O café chega fresquinho até você</p>
                        </div>
                    </SpecificationDivStyle>
                </div>
            </SectionPrincipal>
        </WapperStyled>
        </>
    )
}