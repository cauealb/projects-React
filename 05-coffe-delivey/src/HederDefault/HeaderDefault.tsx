import logo from '../assets/Logo/Logo.svg'
import { ShoppingCart } from 'phosphor-react'

export function HeaderDefault() {
    return (
        <>
            <header>
                <img src={logo} alt="Logo Coffe Delivery" />
                <p>Osasco, São Paulo</p>
                <ShoppingCart size={20} color='#C47F17' weight='fill'/>
            </header>
        </>
    )
}