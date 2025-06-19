import { useState } from "react"


export default function useNewTask() {
    const [newTask, setNewTask] = useState(false)
    
    function handleCreateNewTask() {
        setNewTask(state => state ? false : true)
    }

    return {
        newTask,
        handleCreateNewTask
    }
}