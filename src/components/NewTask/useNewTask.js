import { useContext } from "react"
import { Context } from "../../AppContext/AppContext"


export default function useNewTask() {
    const { newTask, handleCreateNewTask, handleNewTask, handleChangeInputTask } = useContext(Context)

    function clickCreateTask() {
        handleCreateNewTask()
    }

    function addTask(text) {
        handleNewTask(text)
    }

    function changeTask(e) {
        handleChangeInputTask(e)
    }

    return {
        newTask, 
        clickCreateTask, 
        addTask,
        changeTask
    }
}