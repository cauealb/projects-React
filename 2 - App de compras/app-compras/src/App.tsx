import AppContext from "./components/AppContext/AppContext"
import Header from "./components/Header/Header"
import Panel from "./components/Panel/Panel"

export default function App() {
  

  return (
      <AppContext>
        <Header />
        <Panel />
      </AppContext>
  )
}
