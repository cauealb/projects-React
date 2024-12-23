import { GlobalCSS } from "../globalCSS";
import { ThemeProvider } from "styled-components";
import { DefaultStyledTheme } from "./theme/DefaultStyled";

function App() {

  return (
    <>
      <ThemeProvider theme={DefaultStyledTheme}>


        <GlobalCSS />
      </ThemeProvider>
    </>
  )
}

export default App
