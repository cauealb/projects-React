import Burger from "./Burger/Burger";
import { ContainerPanel, ContainerPanelBuger } from "./style/Panel";


export default function Panel() {
    return (
        <>
            <ContainerPanel>
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