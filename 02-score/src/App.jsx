import { Header } from "./Components/Header/Heade";
import { ThemeProvider } from "styled-components";
import { theme } from "./Components/theme";
import { GlobalCSS } from "../global";

export function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Header />
      <GlobalCSS />
    </ThemeProvider>
    </>
  )
}
