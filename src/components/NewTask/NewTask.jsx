import { PlusIcon, XIcon, CheckIcon } from "@phosphor-icons/react";
import './style/NewTask.css';
import { useContext } from "react";
import { Context } from "../../AppContext/AppContext";

export default function NewTask() {
    const { newTask } = useContext(Context)

    if(!newTask) {
        return (
        <button class="newTask">
            <PlusIcon color="#C257A4" size={20} />
            <p>Nova tarefa</p>
        </button>
    )
    } else {
        return (
            <div>
                <input type="text" class="inputTask" />
                <div>
                    <XIcon />
                    <CheckIcon />
                </div>
            </div>
        )
    }
}