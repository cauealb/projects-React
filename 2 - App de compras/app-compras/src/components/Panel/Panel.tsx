import { MagnifyingGlass, Plus } from "phosphor-react";
import Burger from "./Burger/Burger";
import { ContainerPanel, 
        ContainerPanelBuger,
        FormPanel, 
        AddNewItem, 
        Filter } from "./style/Panel";


export default function Panel() {
    return (
        <>
            <ContainerPanel>
                <FormPanel>
                    <AddNewItem>
                        <Plus color="#009961"/>
                        <strong>Add new item</strong>
                    </AddNewItem>
                    <Filter>
                        <input type="text" placeholder="Search names here..." />
                        <button><MagnifyingGlass color="#fff" /></button>
                    </Filter>
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