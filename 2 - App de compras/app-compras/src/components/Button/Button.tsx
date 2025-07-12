import type { ReactNode } from "react"

interface PropsButton {
    children: ReactNode
}

export default function Button({children}: PropsButton) {
    return (
        <button>
            {children}
        </button>
    )
}