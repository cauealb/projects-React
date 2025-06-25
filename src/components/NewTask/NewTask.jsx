import { PlusIcon, XIcon, CheckIcon } from "@phosphor-icons/react";
import './style/NewTask.css';
import useNewTask from "./useNewTask";
import InputTask from "../../InputTask/InputTask";

export default function NewTask() {
    const { newTask,  clickCreateTask, changeTask } = useNewTask()

    if(!newTask) {
        return (
        <button onClick={clickCreateTask} class="newTask">
            <PlusIcon color="#C257A4" size={20} />
            <p>Nova tarefa</p>
        </button>
    )
    } else {
        return (
            <InputTask />
        )
    }
}