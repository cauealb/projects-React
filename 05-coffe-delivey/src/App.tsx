import { ThemeProvider } from "styled-components"
import { ThemeGlobal } from "./theme/ThemeGlobal"
import { CSSGlobalDefault } from "./theme/global"
import { HeaderDefault } from "./HederDefault/HeaderDefault"

export function App() {
   return (
    <>
      <ThemeProvider theme={ThemeGlobal}>
        <HeaderDefault />
         <CSSGlobalDefault />
      </ThemeProvider>
    </>
   )
  
}

export default App
