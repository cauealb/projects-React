import { Header } from "./Components/Header/Heade";
import { ThemeProvider } from "styled-components";
import { theme } from "./Components/theme";
import { GlobalCSS } from "../global";
import { Score } from "./Components/Score/Score";
import { useState } from "react";

export function App() {

  const [score, setScore] = useState(0)

  function Increment(number) {
    setScore(score + number)
  }

  return (
    <>
    <ThemeProvider theme={theme}>
      <Header score={score}/>
      <Score functionClick={Increment}/>
      <GlobalCSS />
    </ThemeProvider>
    </>
  )
}
