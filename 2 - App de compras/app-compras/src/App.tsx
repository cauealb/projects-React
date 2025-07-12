import AppContext from "./components/AppContext/AppContext"
import ButtonPay from "./components/Button/ButtonPay"
import Header from "./components/Header/Header"
import Panel from "./components/Panel/Panel"

export default function App() {
  

  return (
      <AppContext>
        <Header />
        <Panel />
        <ButtonPay>
          <p>Pay</p>
        </ButtonPay>
      </AppContext>
  )
}
