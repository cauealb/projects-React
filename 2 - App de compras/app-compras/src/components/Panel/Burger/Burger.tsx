import burgerTeste from '../../../img/Burgers/comnbo-noite.png'
import { ContainerBuger, ContainerIMG } from './style/Burger'

export default function Burger() {
    return(
        <>
            <ContainerBuger>
                <ContainerIMG>
                    <img src={burgerTeste} alt="" />
                </ContainerIMG>
                <strong>Combo da noite</strong>
                <span>$7.99</span>
            </ContainerBuger>
        </>
    )
}