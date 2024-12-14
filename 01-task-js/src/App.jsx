import FormList from "./Components/FormList"
import ListTaks from "./Components/ListTaks"
import principal from './App.module.css'

function App() {
  return (
    <>
      <section className={principal.main}>
        <h1 className={principal.header}>Gerenciador de Tarefas</h1>
        <FormList />
      </section>
    </>
  )
}

export default App
