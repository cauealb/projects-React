import { createContext, useState } from "react"
import { ThemeProvider } from "styled-components"

interface PropsContext {
    theme: 'light' | 'dark'
}

export const Context = createContext<PropsContext> ({
    theme: 'light'
})

export default function AppContext() {
    const [theme, setTheme] = useState<'light' | 'dark'>('light')

    return (
        <Context value={{
            theme
        }}>

        </Context>
    )
}