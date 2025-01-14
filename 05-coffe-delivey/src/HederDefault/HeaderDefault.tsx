import logo from '../assets/Logo/Logo.svg'
import { ShoppingCart } from 'phosphor-react'
import { HeaderStyle } from './HeaderDefaultStyle'

export function HeaderDefault() {
    return (
        <>
            <HeaderStyle>
                <img src={logo} alt="Logo Coffe Delivery" />
                <div>
                    <p>Osasco, São Paulo</p>
                    <ShoppingCart size={20} color='#C47F17' weight='fill'/>
                </div>
            </HeaderStyle>
        </>
    )
}