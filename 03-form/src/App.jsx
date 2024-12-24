import { GlobalCSS } from "../globalCSS";
import { ThemeProvider } from "styled-components";
import { DefaultStyledTheme } from "./theme/DefaultStyled";
import { Form } from "./Components/Form/Form";
import { List } from "./Components/List/ListLogin";
import { useState } from "react";

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
