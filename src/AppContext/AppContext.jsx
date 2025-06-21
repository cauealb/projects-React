import { createContext, useState } from "react";
import useNewTask from "../components/NewTask/useNewTask";
import useTask from "../components/Task/useTask";
import useHeader from "../components/Header/useHeader";
import useListTask from "../components/ListTask/useListTask";

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
    incrementTaskFinish: (id) => {},
    deleteTask: (id) => {}
})

export default function AppContext({ children }) {
    const [listTasks, setListTasks] = useState([])
    const [taskFinish, setTaskFinish] = useState(0)

    function incrementTaskFinish(id) {
        const newList = listTasks.map(item => {
            if(item.id !== id) {
                return item
            }

            return {...item, finish: true}
        })

        setListTasks(newList)
    };

    function deleteTask(id) {
        const newList = listTasks.filter(item => item.id !== id)

        setListTasks(newList)
    }


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
    const { deleteTask } = useListTask()
        

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
                incrementTaskFinish,
                deleteTask
            }
        }>
            {children}
        </Context.Provider>
    )
}