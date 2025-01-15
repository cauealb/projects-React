import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import imgCoffe from '../../../assets/Logo/ImagemCoffe.svg'
import { SectionPrincipal, DivHeroInfosStyle, SpecificationDivStyle } from "./HeroStyle";

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
                            <p>
                                <span><ShoppingCart size={10}/></span>
                                Compra simples e segura
                            </p>
                        </div>
                        <div>
                            <p>
                                <span><Package size={10}/></span>
                                Embalagem mantém o café intacto
                            </p>
                        </div>
                        <div>
                            <p>
                                <span><Timer size={10}/></span>
                                Entrega rápida e rastreada
                            </p>
                        </div>
                        <div>
                            <p>
                                <span><Coffee size={10}/></span>
                                O café chega fresquinho até você
                            </p>
                        </div>
                    </SpecificationDivStyle>
                </div>
            </SectionPrincipal>

            <h2>Nossos cafés</h2>
        </>
    )
}