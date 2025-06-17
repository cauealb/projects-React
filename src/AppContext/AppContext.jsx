import { createContext } from "react";
import useHeader from "../components/Header/useHeader";
import useNewTask from "../components/NewTask/useNewTask";

export const Context = createContext({
    taskFinish: 0,
    handleTaskFinish: () => {},
    newTask: true,
    handleCreateNewTask: () => {}
})

export default function AppContext({ children }) {
    const { taskFinish, handleTaskFinish } = useHeader()
    const { newTask, handleCreateNewTask } = useNewTask()
    
    return (
        <Context.Provider value={
            {
                taskFinish, 
                handleTaskFinish,
                newTask,
                handleCreateNewTask
            }
        }>
            {children}
        </Context.Provider>
    )
}