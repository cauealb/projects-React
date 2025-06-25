import { useContext } from "react"
import { Context } from "../../AppContext/AppContext"


export default function useNewTask() {
    const { newTask, handleCreateNewTask, handleChangeInputTask } = useContext(Context)

    function clickCreateTask() {
        handleCreateNewTask()
    }

    function changeTask(e) {
        handleChangeInputTask(e)
    }

    return {
        newTask, 
        clickCreateTask,
        changeTask
    }
}