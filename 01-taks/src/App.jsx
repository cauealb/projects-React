import FormList from "./Components/FormList"
import ListTaks from "./Components/ListTaks"
import principal from './App.module.css'

function App() {
  return (
    <>
      <section className={principal.main}>
        <FormList />
      </section>
    </>
  )
}

export default App
