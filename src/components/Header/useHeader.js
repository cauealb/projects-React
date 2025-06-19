import { useState } from "react";


export default function useHeader() {
    const [taskCreated, setTaskCreated] = useState(0)
    const [completedTask, setCompletedTask] = useState(0)

    function incrementTask() {
        setTaskCreated(state => state + 1)
    }

    function incrementCompletedTask() {
        setCompletedTask(state => state + 1)
    }

    return {
        incrementTask,
        incrementCompletedTask
    }
}