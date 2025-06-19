import { useState } from "react";


export default function useTask() {
    const [taskFinish, setTaskFinish] = useState(true);

    function handleTaskFinish() {
        setTaskFinish(state => state ? false : true)
    }

    return{
        taskFinish,
        handleTaskFinish
    }

}