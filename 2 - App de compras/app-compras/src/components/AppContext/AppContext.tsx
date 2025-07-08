import { createContext, useState, type ReactNode } from "react"

interface PropsAppContext {
    children: ReactNode
}

interface PropsContext {
    theme: 'light' | 'dark'
}

export const Context = createContext<PropsContext> ({
    theme: 'light'
})

export default function AppContext({ children }: PropsAppContext) {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    return (
        <Context value={{
            theme
        }}>
            {children}
        </Context>
    )
}