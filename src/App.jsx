import Header from "./components/Header/Header";
import NewTask from "./components/NewTask/NewTask"
import AppContext from "./AppContext/AppContext";
import Task from "./components/Task/Task";

export default function App() {
  return(
    <AppContext>
      <Header />
      <NewTask />

      <Task />
    </AppContext>
  )
}