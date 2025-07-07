import { useContext } from "react"
import { Context } from "../AppContext/AppContext"


export default function useInputTask() {
    const {handleNewTask, handleCreateNewTask, handleChangeInputTask, handleEditTask, handleNoEditTask } = useContext(Context)

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

    function noEditTask(id) {
        handleNoEditTask(id)
    }

    return {
        addTask,
        clickCreateTask,
        changeTask,
        editTask,
        noEditTask
    }
}