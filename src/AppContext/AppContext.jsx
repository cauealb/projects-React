import { createContext } from "react";
import useNewTask from "../components/NewTask/useNewTask";
import useTask from "../components/Task/useTask";
import useHeader from "../components/Header/useHeader";

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
    incrementCompletedTask: () => {},
    setListTasks: () => {},
    incrementTaskFinish: (id) => {}
})

export default function AppContext({ children }) {
    const { taskFinish, handleTaskFinish } = useTask()
    const { newTask, 
            listTasks,
            handleCreateNewTask, 
            handleNewTask, 
            taskCreated, 
            completedTask,
            incrementTask, 
            incrementCompletedTask ,
            setListTasks
           } = useNewTask()
    const { incrementTaskFinish } = useHeader()
        

    return (
        <Context.Provider value={
            {
                taskFinish, 
                handleTaskFinish,
                newTask,
                handleCreateNewTask,
                listTasks,
                handleNewTask,
                taskCreated,
                completedTask,
                incrementTask,
                incrementCompletedTask,
                setListTasks,
                incrementTaskFinish
            }
        }>
            {children}
        </Context.Provider>
    )
}