import { List, Storefront, Scroll } from 'phosphor-react'
import { ContainerHeader, ContainerNameCompany, ContainerInfos } from './style/Header'

export default function Header() {
    return (
        <ContainerHeader>
            <ContainerNameCompany>
                <List color='#fff' size={26} />
                <h1>Empresa teste</h1>
            </ContainerNameCompany> 
            <ContainerInfos>
                <Storefront color='#fff' size={26} />
                <Scroll color='#fff' size={26} />
                <div>
                    <p>Cauê</p>
                    <img src='../' alt="Profile image" />
                </div>
            </ContainerInfos>
        </ContainerHeader>
    )
}