import { createContext } from "react";
import useNewTask from "../components/NewTask/useNewTask";
import useTask from "../components/Task/useTask";

export const Context = createContext({
    taskFinish: 0,
    handleTaskFinish: () => {},
    newTask: false,
    handleCreateNewTask: () => {},
    listTasks: [],
    handleNewTask: () => {},
    taskCreated: 0,
    completedTask: 0,
    incrementTask: () => {},
    incrementCompletedTask: () => {}
})

export default function AppContext({ children }) {
    const { taskFinish, handleTaskFinish } = useTask()
    const { newTask, listTasks, handleCreateNewTask, handleNewTask } = useNewTask()

    return (
        <Context.Provider value={
            {
                taskFinish, 
                handleTaskFinish,
                newTask,
                handleCreateNewTask,
                listTasks,
                handleNewTask
            }
        }>
            {children}
        </Context.Provider>
    )
}