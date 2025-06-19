import { TrashIcon, PencilIcon } from "@phosphor-icons/react"
import './style/Task.css'
import { useContext } from "react"
import { Context } from "../../AppContext/AppContext"

export default function Task({text, finish}) {
    const { taskFinish, handleTaskFinish } = useContext(Context)

    return(
        <div class="task">
            <input onClick={handleTaskFinish} type="checkbox" />
            {finish ? <s>{text}</s>
             : <p>{text}</p>}
            <div>
                <TrashIcon class="TrashIcon" size={17} color="#7A6E76" />
                <PencilIcon class="PencilIcon" size={17} color="#7A6E76" />
            </div>
        </div>
    )
}