import { useContext } from "react"
import { Context } from "../AppContext/AppContext"


export default function useInputTask() {
    const {handleNewTask, handleCreateNewTask, handleChangeInputTask, handleEditTask } = useContext(Context)

    function addTask(text) {
        handleNewTask(text)
    }

    function clickCreateTask() {
        handleCreateNewTask()
    }

    function changeTask(e) {
        handleChangeInputTask(e)
    }

    function editTask(id) {
        handleEditTask(id)
    }

    return {
        addTask,
        clickCreateTask,
        changeTask,
        editTask
    }
}