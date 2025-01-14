import { ThemeProvider } from "styled-components"
import { ThemeGlobal } from "./theme/ThemeGlobal"
import { CSSGlobalDefault } from "./theme/global"
import { BrowserRouter } from "react-router"
import { Router } from "./Routes/Routes"

export function App() {
   return (
    <>
      <ThemeProvider theme={ThemeGlobal}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
         <CSSGlobalDefault />
      </ThemeProvider>
    </>
   )
  
}

export default App
