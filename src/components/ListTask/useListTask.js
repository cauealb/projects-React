import { useContext } from "react";
import { Context } from "../../AppContext/AppContext";


export default function useListTask() {
    const { listTasks, setListTasks } = useContext(Context);

    function deleteTask(id) {
        const newList = listTasks.filter(item => item.id !== id);

        setListTasks(newList)
    }

    return {
        deleteTask
    }
}