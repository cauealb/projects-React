import { createContext } from "react";
import useNewTask from "../components/NewTask/useNewTask";
import Task from "../components/Task/Task";

export const Context = createContext({
    taskFinish: 0,
    handleTaskFinish: () => {},
    newTask: true,
    handleCreateNewTask: () => {}
})

export default function AppContext({ children }) {
    const { taskFinish, handleTaskFinish } = Task()
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