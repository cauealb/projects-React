import { useContext } from "react"
import { Context } from "../../AppContext/AppContext"


export default function useNewTask() {
    const { newTask, handleCreateNewTask, handleNewTask } = useContext(Context)

    function clickCreateTask() {
        handleCreateNewTask()
    }

    function addTask(text) {
        handleNewTask(text)
    }

    return {
        newTask, 
        clickCreateTask, 
        addTask   
    }
}