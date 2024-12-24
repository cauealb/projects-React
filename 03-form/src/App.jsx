import { GlobalCSS } from "../globalCSS";
import { ThemeProvider } from "styled-components";
import { DefaultStyledTheme } from "./theme/DefaultStyled";
import { Form } from "./Components/Form/Form";
import { List } from "./Components/List/ListLogin";

function App() {

  return (
    <>
      <ThemeProvider theme={DefaultStyledTheme}>
        <Form />
        <List />
        <GlobalCSS />
      </ThemeProvider>
    </>
  )
}

export default App
