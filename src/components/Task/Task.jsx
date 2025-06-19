import { TrashIcon, PencilIcon } from "@phosphor-icons/react"
import './style/Task.css'

export default function Task() {
    return(
        <div class="task">
            <input type="checkbox" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At iste rem corporis ad maiores minus amet sed. Asperiores, earum nesciunt nisi nihil inventore temporibus cupiditate ipsum est architecto libero aliquam!</p>
            <div>
                <TrashIcon />
                <PencilIcon />
            </div>
        </div>
    )
}