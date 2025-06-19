import { TrashIcon, PencilIcon } from "@phosphor-icons/react"
import './style/Task.css'

export default function Task() {
    return(
        <div class="task">
            <input type="checkbox" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <div>
                <TrashIcon class="TrashIcon" size={17} />
                <PencilIcon class="PencilIcon" size={17} />
            </div>
        </div>
    )
}