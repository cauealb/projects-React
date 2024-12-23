import { GlobalCSS } from "../globalCSS";
import { ThemeProvider } from "styled-components";
import { DefaultStyledTheme } from "./theme/DefaultStyled";
import { Form } from "./Components/Form/Form";

function App() {

  return (
    <>
      <ThemeProvider theme={DefaultStyledTheme}>
        <Form />

        <GlobalCSS />
      </ThemeProvider>
    </>
  )
}

export default App
