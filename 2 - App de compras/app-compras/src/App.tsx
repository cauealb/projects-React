import AppContext from "./components/AppContext/AppContext"
import Button from "./components/Button/Button"
import Header from "./components/Header/Header"
import Panel from "./components/Panel/Panel"

export default function App() {
  

  return (
      <AppContext>
        <Header />
        <Panel />
        <Button>
          <p>Pay</p>
        </Button>
      </AppContext>
  )
}
