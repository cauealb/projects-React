import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme  {
        bgPrincipal: string
        bgSecundary: string
        colorWhite: string
        colorBlack: string
        colorRed: string
        colorLines: string
        hoverBgPrincipal: string
        hoverBgSecundary: string
    }
}