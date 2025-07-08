import { createContext, useMemo, useState, type ReactNode } from "react"
import { ThemeProvider, type DefaultTheme } from "styled-components"

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

    const currentTheme: DefaultTheme  = useMemo(() => {
        return themes[theme] || themes.light;
    }, [theme, themes])

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