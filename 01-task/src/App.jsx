import appStyle from './App.module.css'
import { ListTaks } from './Components/ListTaks'

function App() {

  return (
    <>
      <section className={appStyle.wapper}>
        <ListTaks />
      </section>
    </>
  )
}

export default App
