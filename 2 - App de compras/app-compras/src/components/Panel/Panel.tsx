import { MagnifyingGlass, Plus } from "phosphor-react";
import Burger from "./Burger/Burger";
import { ContainerPanel, ContainerPanelBuger, FormPanel } from "./style/Panel";


export default function Panel() {
    return (
        <>
            <ContainerPanel>
                <FormPanel>
                    <div>
                        <Plus color="#009961"/>
                        <strong>Add new item</strong>
                    </div>
                    <form>
                        <input type="text" placeholder="Search names here..." />
                        <button><MagnifyingGlass color="#fff" /></button>
                    </form>
                </FormPanel>
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