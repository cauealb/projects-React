import express from '../../../assets/SvgCoffe/Type=Expresso.svg'

export default function Cards() {
    return (
        <>
            <div>
                <header>
                    <img src={express} />
                </header>
                <p>Tradicional</p>
                <div>
                    <h3>Expresso Tradicional</h3>
                    <p>O tradicional café feito com água quente e grãos moídos</p>
                </div>
                <footer>
                    <p>R$9,90</p>
                    <input type="number" />
                    <button>Enviar</button>
                </footer>
            </div>
        </>
    )
}