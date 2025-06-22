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
    handleDeleteTask: (id) => {},
    handleFinishTask: (id) =>  {}
})

export default function AppContext({ children }) {
    const [listTasks, setListTasks] = useState([])
    const [newTask, setNewTask] = useState(false)
    const [taskFinish, setTaskFinish] = useState(0)
    const [taskCreated, setTaskCreated] = useState(0)
    const [completedTask, setCompletedTask] = useState(0)

    function handleCreateNewTask() {
        setNewTask(state => state ? false : true);
    }

    function handleDeleteTask(id) {
        const newList = listTasks.filter(item => item.id !== id)

        setListTasks(newList);
        decrementTaskCreated();
    }

    function handleFinishTask(id) {{
        const newList = listTasks.map(item => {
            if(item.id !== id) {
                return item
            }

            return {...item, finish: item.finish ? false : true}
        })

        console.log(newList,'id:', id)
        setListTasks(newList);
    }}

    function handleNewTask() {
        const newTask = {
            id: new Date().getTime(),
            text: 'blablabla',
            finish: false
        }

        setListTasks(state => [...state, newTask]);
        incrementTask();
    }

    function incrementTask() {
        setTaskCreated(state => state + 1)
    }

    function decrementTaskCreated() {
        setTaskCreated(state => state - 1)
    }
        

    return (
        <Context.Provider value={
            {
                taskFinish, 
                newTask,
                handleCreateNewTask,
                listTasks,
                handleNewTask,
                taskCreated,
                completedTask,
                incrementTask,
                setListTasks,
                handleDeleteTask,
                handleFinishTask
            }
        }>
            {children}
        </Context.Provider>
    )
}