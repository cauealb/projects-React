import app from './app.module.css'
import ListTask from './Components/listTask.tsx'

function App() {

  return (
    <>
      <section className={app.hero}>
        <ListTask />
      </section>
      
    </>
  )
}

export default App
