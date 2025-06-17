import { PlusIcon } from "@phosphor-icons/react";
import './style/NewTask.css';

export default function NewTask() {
    return (
        <button>
            <PlusIcon color="#C257A4" size={20} />
            Nova tarefa
        </button>
    )
}