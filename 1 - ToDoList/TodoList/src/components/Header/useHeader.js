import { useState } from "react";

export default function useHeader() {
    const [taskFinish, setTaskFinish] = useState(0);

    function handleTaskFinish() {
        setTaskFinish(state => state + 1)
    }

    return {
        taskFinish,
        setTaskFinish,
        handleTaskFinish
    }
}