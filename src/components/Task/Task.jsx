import { TrashIcon, PencilIcon } from "@phosphor-icons/react"
import './style/Task.css'

export default function Task() {
    return(
        <div class="task">
            <input type="checkbox" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div>
                <TrashIcon class="TrashIcon" size={17} color="#7A6E76" />
                <PencilIcon class="PencilIcon" size={17} color="#7A6E76" />
            </div>
        </div>
    )
}