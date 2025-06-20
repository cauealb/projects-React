import { useState } from "react"


export default function useNewTask() {
    const [listTasks, setListTasks] = useState([])
    const [newTask, setNewTask] = useState(false)
    const [taskCreated, setTaskCreated] = useState(0)
    const [completedTask, setCompletedTask] = useState(0)
    
    function handleCreateNewTask() {
        setNewTask(state => state ? false : true)
    }

    function handleNewTask() {
        const newTask = {
            id: new Date().getTime(),
            text: 'blablabla',
            finish: false
        }

        setListTasks(state => [...state, newTask])
    }

    function incrementTask() {
        setTaskCreated(state => state + 1)
    }

    return {
        newTask,
        handleCreateNewTask,
        handleNewTask,
        listTasks,
        handleNewTask,
        incrementTask
    }
}