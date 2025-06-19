import { TrashIcon, PencilIcon } from "@phosphor-icons/react"
import './style/Task.css'
import { useContext } from "react"
import { Context } from "../../AppContext/AppContext"

export default function Task() {
    const { taskFinish, handleTaskFinish } = useContext(Context)

    return(
        <div class="task">
            <input onClick={handleTaskFinish} type="checkbox" />
            {taskFinish ?
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            :
                <s>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</s>}
            
            <div>
                <TrashIcon class="TrashIcon" size={17} color="#7A6E76" />
                <PencilIcon class="PencilIcon" size={17} color="#7A6E76" />
            </div>
        </div>
    )
}