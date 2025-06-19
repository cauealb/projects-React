import { createContext } from "react";
import useNewTask from "../components/NewTask/useNewTask";
import useTask from "../components/Task/useTask";

export const Context = createContext({
    taskFinish: 0,
    handleTaskFinish: () => {},
    handleNewTask: () => {},
    newTask: false,
    handleCreateNewTask: () => {}
})

export default function AppContext({ children }) {
    const { taskFinish, handleTaskFinish } = useTask()
    const { newTask, handleCreateNewTask, handleNewTask} = useNewTask()

    return (
        <Context.Provider value={
            {
                taskFinish, 
                handleTaskFinish,
                newTask,
                handleCreateNewTask,
                handleNewTask
            }
        }>
            {children}
        </Context.Provider>
    )
}