import { useContext } from "react";
import { Context } from "../../AppContext/AppContext";

export default function useTask() {
    const { handleDeleteTask, handleFinishTask } = useContext(Context);

    function deleteTask(id) {
        handleDeleteTask(id);
    }

    function taskFinish(id) {
        handleFinishTask(id);
    }

    return {
        deleteTask,
        taskFinish
    }

}