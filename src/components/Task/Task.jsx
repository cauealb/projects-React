import { TrashIcon, PencilIcon } from "@phosphor-icons/react"
import './style/Task.css'
import useTask from "./useTask"
import InputTask from "../../InputTask/InputTask"

export default function Task({id ,text, finish, edit}) {
    const { deleteTask, taskFinish, editTask } = useTask()

    if(!edit) {
        return(
        <div class="task">
            <input onClick={() => taskFinish(id)} type="checkbox" />
            {finish ? <s>{text}</s>
             : <p>{text}</p>}
            <div>
                <TrashIcon onClick={() => deleteTask(id)} class="TrashIcon" size={17} color="#7A6E76" />
                <PencilIcon onClick={() => editTask(id)} class="PencilIcon" size={17} color="#7A6E76" />
            </div>
        </div>
    )
    }

    return (
        <InputTask 
            isNewTask={false} 
            id={id} 
        />
    )
}