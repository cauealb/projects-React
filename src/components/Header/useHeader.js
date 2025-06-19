import { useState } from "react";


export default function useHeader() {
    const [taskCreated, setTaskCreated] = useState(0)
    const [completedTask, setCompletedTask] = useState(0)

}