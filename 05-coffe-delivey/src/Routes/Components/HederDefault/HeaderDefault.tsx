import logo from '../../../assets/Logo/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { HeaderStyle, HeaderStyleDiv, ParagraphStyle, PayStyle } from './HeaderDefaultStyle'
import { NavLink } from 'react-router'
import { Hero } from '../Hero/Hero'

export function HeaderDefault() {
    return (
        <>
            <HeaderStyle>
                <NavLink to='/'>
                    <img src={logo} alt="Logo Coffe Delivery" />
                </NavLink>
                <HeaderStyleDiv>
                    <ParagraphStyle> <MapPin size={22} color="#8047F8" weight="fill" /> Osasco, São Paulo</ParagraphStyle>
                    <PayStyle>
                        <NavLink to='/'>
                            <ShoppingCart size={20} color='#C47F17' weight='fill'/>
                        </NavLink>
                    </PayStyle>
                </HeaderStyleDiv>
            </HeaderStyle>
            <Hero />
        </>
    )
}