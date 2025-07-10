import Burger from "./Burger/Burger";
import { ContainerPanel } from "./style/Panel";


export default function Panel() {
    return (
        <>
            <ContainerPanel>
                <div>
                    <Burger />
                </div>
            </ContainerPanel>
        </>
    )
}