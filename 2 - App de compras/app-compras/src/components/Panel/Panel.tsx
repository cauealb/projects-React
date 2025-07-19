import { MagnifyingGlass, Plus } from "phosphor-react";
import Burger from "./Burger/Burger";
import { ContainerPanel, ContainerPanelBuger } from "./style/Panel";


export default function Panel() {
    return (
        <>
            <ContainerPanel>
                <header>
                    <div>
                        <Plus color="#009961"/>
                        <strong>Add new item</strong>
                    </div>
                    <form>
                        <input type="text" placeholder="Search names here..." />
                        <button><MagnifyingGlass color="#fff" /></button>
                    </form>
                </header>
                <ContainerPanelBuger>
                    <Burger />
                    <Burger />
                    <Burger />
                    <Burger />
                    <Burger />
                </ContainerPanelBuger>
            </ContainerPanel>
        </>
    )
}