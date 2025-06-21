import { TrashIcon, PencilIcon } from "@phosphor-icons/react"
import './style/Task.css'
import { useContext } from "react"
import { Context } from "../../AppContext/AppContext"

export default function Task({id ,text, finish}) {
    const { incrementTaskFinish, deleteTask } = useContext(Context)

    return(
        <div class="task">
            <input onClick={() => incrementTaskFinish(id)} type="checkbox" />
            {finish ? <s>{text}</s>
             : <p>{text}</p>}
            <div>
                <TrashIcon onClick={deleteTask} class="TrashIcon" size={17} color="#7A6E76" />
                <PencilIcon class="PencilIcon" size={17} color="#7A6E76" />
            </div>
        </div>
    )
}