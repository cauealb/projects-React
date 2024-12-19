import { GlobalThemes } from "./theme/Theme"
import { ThemeProvider } from "styled-components"
import { BrowserRouter } from "react-router"
import { Router } from "./pages/Router"

function App() {

  return (
    <>
      <ThemeProvider theme={GlobalThemes}>
        <BrowserRouter>
            <Router></Router>
        </BrowserRouter>
      </ThemeProvider>
    </>
  )
}

export default App
