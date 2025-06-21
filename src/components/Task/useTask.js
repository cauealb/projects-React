import { useContext } from "react";
import { Context } from "../../AppContext/AppContext";

export default function useTask() {
    const { handleDeleteTask } = useContext(Context);

    function deleteTask(id) {
        handleDeleteTask(id);
    }

    return {
        deleteTask
    }

}