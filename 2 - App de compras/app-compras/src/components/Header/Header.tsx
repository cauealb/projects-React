import { List, Storefront, Scroll, CaretDown } from 'phosphor-react'
import { ContainerHeader, ContainerNameCompany, ContainerInfos } from './style/Header'
import profile from '../../img/Profile/profile.jpg'

export default function Header() {
    return (
        <ContainerHeader>
            <ContainerNameCompany>
                <List color='#fff' size={26} />
                <h1>Empresa teste</h1>
            </ContainerNameCompany> 
            <ContainerInfos>
                <Storefront color='#fff' size={26} style={{cursor: 'pointer'}} />
                <Scroll color='#fff' size={26} style={{cursor: 'pointer'}} />
                <div>
                    <p>Cauê Alves</p>
                    <img src={profile} alt="Profile image" />
                    <CaretDown color='#fff' style={{cursor: 'pointer'}} />
                </div>
            </ContainerInfos>
        </ContainerHeader>
    )
}