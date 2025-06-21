import { useContext, useState } from "react";
import { Context } from "../../AppContext/AppContext";


export default function useHeader() {
    const { listTasks, setListTasks } = useContext(Context)
    const [taskFinish, setTaskFinish] = useState(0)

    function incrementTaskFinish(id) {

        const newList = listTasks.map(item => {
            console.log(item)
            if(item.id === id) {
                return {...item, finish: true}
            }
            return item;
        })

        setListTasks(newList)
    }


    return {
        taskFinish,
        incrementTaskFinish
    }

}