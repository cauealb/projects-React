import { PlusIcon, XIcon, CheckIcon } from "@phosphor-icons/react";
import './style/NewTask.css';
import { useContext } from "react";
import { Context } from "../../AppContext/AppContext";

export default function NewTask() {
    const { newTask, handleCreateNewTask } = useContext(Context)

    if(!newTask) {
        return (
        <button onClick={handleCreateNewTask} class="newTask">
            <PlusIcon color="#C257A4" size={20} />
            <p>Nova tarefa</p>
        </button>
    )
    } else {
        return (
            <div class="inputTask">
                <input type="text" />
                <div>
                    <XIcon onClick={handleCreateNewTask} size={27} class="XIcon" color="#C257A4" />
                    <CheckIcon size={27} class="CheckIcon" color="#fff" />
                </div>
            </div>
        )
    }
}