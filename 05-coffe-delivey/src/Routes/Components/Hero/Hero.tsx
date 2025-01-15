import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Hero() {
    return (
        <>
            <section>
                <div>
                    <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                    <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    <div>
                        <p>
                            <span><ShoppingCart size={10}/></span>
                            Compra simples e segura
                        </p>
                        <p>
                            <span><Timer size={10}/></span>
                            Entrega rápida e rastreada
                        </p>
                        <p>
                            <span><Package size={10}/></span>
                            Embalagem mantém o café intacto
                        </p>
                        <p>
                            <span><Coffee size={10}/></span>
                            O café chega fresquinho até você
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}