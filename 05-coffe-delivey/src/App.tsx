import { ThemeProvider } from "styled-components"
import { ThemeGlobal } from "./theme/ThemeGlobal"
import { CSSGlobalDefault } from "./theme/global"

export function App() {
   return (
    <>
      <ThemeProvider theme={ThemeGlobal}>
        <h1>Hello Word</h1>
         <CSSGlobalDefault />
      </ThemeProvider>
    </>
   )
  
}

export default App
