import Header from "./components/Header/Header";
import NewTask from "./components/NewTask/NewTask"
import AppContext, { Context } from "./AppContext/AppContext";
import Task from "./components/Task/Task";
import { useContext } from "react";

export default function App() {
  const { listTasks } = useContext(Context)

  return(
    <AppContext>
      <div class="space">
        <Header />
        <NewTask />

        {listTasks.map(item => (
          <Task 
            text={item.text}
            finish={item.finish}
          />
        ))}
      </div>
    </AppContext>
  )
}