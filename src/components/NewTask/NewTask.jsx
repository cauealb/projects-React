import { PlusIcon } from "@phosphor-icons/react";
import './style/NewTask.css';

export default function NewTask() {
    return (
        <button class="newTask">
            <PlusIcon color="#C257A4" size={20} />
            <p>Nova tarefa</p>
        </button>
    )
}