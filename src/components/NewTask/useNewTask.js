import { useState } from "react"


export default function useNewTask() {
    const [listTasks, setListTasks] = useState([])
    const [newTask, setNewTask] = useState(false)
    
    function handleCreateNewTask() {
        setNewTask(state => state ? false : true)
    }

    function handleNewTask() {
        const newTask = {
            id: new Date().getTime(),
            text: 'blablabla',
            finish: false
        }

        console.log(newTask)

        setListTasks(state => [...state, newTask])
    }

    return {
        newTask,
        handleCreateNewTask,
        handleNewTask,
        listTasks,
        handleNewTask
    }
}