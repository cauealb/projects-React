import { createContext, useMemo, useState, type ReactNode } from "react"
import { ThemeProvider } from "styled-components"

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

    type ThemeType = typeof themes.dark

    const currentTheme = useMemo<ThemeType>(() => {
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