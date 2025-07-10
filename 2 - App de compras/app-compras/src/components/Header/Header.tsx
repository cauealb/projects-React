import { List, Storefront, Scroll } from 'phosphor-react'
import { ContainerHeader, ContainerNameCompany } from './style/Header'

export default function Header() {
    return (
        <ContainerHeader>
            <ContainerNameCompany>
                <List color='#fff' size={26} />
                <h1>Empresa teste</h1>
            </ContainerNameCompany> 
            <div>
                <Storefront color='#fff' size={26} />
                <Scroll color='#fff' size={26} />
                <div>
                    <p>Cauê</p>
                    <img src="../../../img/profile.jpg" alt="Profile image" />
                </div>
            </div>
        </ContainerHeader>
    )
}