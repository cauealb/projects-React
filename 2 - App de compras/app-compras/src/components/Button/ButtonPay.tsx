import type { ReactNode } from "react"
import { ButtonStyle } from "./style/ButtonPay"

interface PropsButton {
    children: ReactNode
}

export default function ButtonPay({children}: PropsButton) {
    return (
        <ButtonStyle>
            {children}
        </ButtonStyle>
    )
}