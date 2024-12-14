import appStyle from './App.module.css'
import { FormTaks } from './Components/FormTaks'
import { ListTaks } from './Components/ListTaks'

function App() {
  return (
    <>
      <section className={appStyle.wapper}>
        <h1>Gerenciador de Tarefas</h1>
        <FormTaks />
      </section>
    </>
  )
}

export default App
