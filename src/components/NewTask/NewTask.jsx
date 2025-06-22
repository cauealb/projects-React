import { PlusIcon, XIcon, CheckIcon } from "@phosphor-icons/react";
import './style/NewTask.css';
import useNewTask from "./useNewTask";

export default function NewTask() {
    const { newTask, addTask, clickCreateTask, changeTask } = useNewTask()

    if(!newTask) {
        return (
        <button onClick={clickCreateTask} class="newTask">
            <PlusIcon color="#C257A4" size={20} />
            <p>Nova tarefa</p>
        </button>
    )
    } else {
        return (
            <div class="inputTask">
                <input onChange={changeTask} type="text" />
                <div>
                    <XIcon onClick={clickCreateTask} size={27} class="XIcon" color="#C257A4" />
                    <CheckIcon onClick={addTask} size={27} class="CheckIcon" color="#fff" />
                </div>
            </div>
        )
    }
}