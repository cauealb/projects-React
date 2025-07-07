import { useContext } from "react"
import { Context } from "../../AppContext/AppContext"


export default function useNewTask() {
    const { newTask, handleCreateNewTask } = useContext(Context)

    function clickCreateTask() {
        handleCreateNewTask()
    }

    return {
        newTask, 
        clickCreateTask
    }
}