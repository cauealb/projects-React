import { CheckIcon, XIcon } from "@phosphor-icons/react";
import './style/InputTask.css'
import useInputTask from "./useInputTask";

export default function InputTask({ isNewTask, id }) {
    const { addTask, changeTask, clickCreateTask, editTask, noEditTask } = useInputTask()

    return (
            <div class="inputTask">
                <input onChange={changeTask} type="text" />
                <div>
                    <XIcon onClick={isNewTask ? clickCreateTask : () => noEditTask(id)} size={27} class="XIcon" color="#C257A4" />
                    <CheckIcon onClick={isNewTask ? addTask : editTask} size={27} class="CheckIcon" color="#fff" />
                </div>
            </div>
        )
} 