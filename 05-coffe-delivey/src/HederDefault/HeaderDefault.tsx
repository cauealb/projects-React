import logo from '../assets/Logo/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderStyle, HeaderStyleDiv, ParagraphStyle, PayStyle } from './HeaderDefaultStyle'

export function HeaderDefault() {
    return (
        <>
            <HeaderStyle>
                <img src={logo} alt="Logo Coffe Delivery" />
                <HeaderStyleDiv>
                    <ParagraphStyle> <MapPin size={22} color="#8047F8" weight="fill" /> Osasco, São Paulo</ParagraphStyle>
                    <PayStyle>
                        <ShoppingCart size={20} color='#C47F17' weight='fill'/>
                    </PayStyle>
                </HeaderStyleDiv>
            </HeaderStyle>
        </>
    )
}