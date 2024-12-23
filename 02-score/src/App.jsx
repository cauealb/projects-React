import { Header } from "./Components/Header/Heade";
import { ThemeProvider } from "styled-components";
import { theme } from "./Components/theme";
import { GlobalCSS } from "../global";
import { Score } from "./Components/Score/Score";

export function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Header />
      <Score />
      <GlobalCSS />
    </ThemeProvider>
    </>
  )
}
