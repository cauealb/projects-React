import { useContext } from "react";
import { Context } from "../../AppContext/AppContext";

export default function useTask() {
    const { handleDeleteTask, handleFinishTask, handleEditTask } = useContext(Context);

    function deleteTask(id) {
        handleDeleteTask(id);
    }

    function taskFinish(id) {
        handleFinishTask(id);
    }

    function editTask(id) {
        handleEditTask(id)
    }

    return {
        deleteTask,
        taskFinish,
        editTask,
    }

}