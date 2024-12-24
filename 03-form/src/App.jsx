import { GlobalCSS } from "../globalCSS";
import { ThemeProvider } from "styled-components";
import { DefaultStyledTheme } from "./theme/DefaultStyled";
import { Form } from "./Components/Form/Form";
import { List } from "./Components/List/ListLogin";

const api = [
  1, 2, 3
]

function App() {

  return (
    <>
      <ThemeProvider theme={DefaultStyledTheme}>
        <Form />
        {api.map(item => {
          return <List /> 
        })}
        <GlobalCSS />
      </ThemeProvider>
    </>
  )
}

export default App
