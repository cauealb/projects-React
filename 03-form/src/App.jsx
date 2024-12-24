import { GlobalCSS } from "../globalCSS";
import { ThemeProvider } from "styled-components";
import { DefaultStyledTheme } from "./theme/DefaultStyled";
import { Form } from "./Components/Form/Form";
import { List } from "./Components/List/ListLogin";
import { useState } from "react";

function App() {
  const [itemList, setItemList] = useState([])

  function SubmitItens() {
    event.preventDefault()
    setItemList([...itemList, itemList])
  }

  return (
    <>
      <ThemeProvider theme={DefaultStyledTheme}>
        <Form submit={SubmitItens}/>
        {itemList.map(item => {
          return <List /> 
        })}
        <GlobalCSS />
      </ThemeProvider>
    </>
  )
}

export default App
