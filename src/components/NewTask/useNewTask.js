import { useContext } from "react"
import Context from '../../AppContext/AppContext'

export default function useNewTask() {
    const { newTask, handleCreateNewTask, handleNewTask } = useContext(Context)

    function clickCreateTask() {
        handleCreateNewTask()
    }

    function addTask() {
        handleNewTask()
    }

    return {
        newTask, 
        clickCreateTask, 
        addTask   
    }
}