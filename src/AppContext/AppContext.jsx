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
    handleFinishTask: (id) =>  {},
    handleChangeInputTask: (e) => {}
})

export default function AppContext({ children }) {
    const [listTasks, setListTasks] = useState([])
    const [newTask, setNewTask] = useState(false)
    const [taskFinish, setTaskFinish] = useState(0)
    const [taskCreated, setTaskCreated] = useState(0)
    const [completedTask, setCompletedTask] = useState(0)
    const [taskChange, setTaskChange] = useState("")

    function handleNewTask() {
        if(taskChange === '') return alert("Insira algo para concluir sua inserção de tarefa!")
        if(taskChange.length === 1) return alert("Insira uma tarefa verdadeira!")

        const newTask = {
            id: new Date().getTime(),
            text: taskChange,
            finish: false,
            edit: false
        }

        setListTasks(state => [...state, newTask]);
        incrementTask();
    }

    function handleDeleteTask(id) {
        const newList = listTasks.filter(item => item.id !== id)

        setListTasks(newList);
        decrementTaskCreated();
    }

    function handleChangeInputTask(e) {
        setTaskChange(e.target.value)
    }

    function handleCreateNewTask() {
        setNewTask(state => state ? false : true);
    }

    function handleFinishTask(id) {{
        const newList = listTasks.map(item => {
            if(item.id !== id) {
                return item
            }

            return {...item, finish: item.finish ? false : true}
        })

        setListTasks(newList);
    }}

    function incrementTask() {
        setTaskCreated(state => state + 1)
    }

    function decrementTaskCreated() {
        setTaskCreated(state => state - 1)
    }

    function editTask(id) {
        const newList = listTasks.map(item => {
            if(item.id === id) {
                return {...item, edit: item.edit ? false : true}
            }

            return item;
        })

        setListTasks(newList);
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
                handleFinishTask,
                handleChangeInputTask
            }
        }>
            {children}
        </Context.Provider>
    )
}