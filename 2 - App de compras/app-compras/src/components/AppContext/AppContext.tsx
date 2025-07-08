import { createContext, useMemo, useState, type ReactNode } from "react"
import { ThemeProvider, DefualtTheme } from "styled-components"

import themes from "../../style/theme"

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

    const currentTheme: DefualtTheme = useMemo(() => {
        return themes[theme] || themes.light;
    }, [themes])

    return (
        <Context value={{
            theme
        }}>
            <ThemeProvider theme={currentTheme}>
                {children}
            </ThemeProvider>
        </Context>
    )
}