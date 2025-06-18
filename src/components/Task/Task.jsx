import { TrashIcon, PencilIcon } from "@phosphor-icons/react"

export default function Task() {
    return(
        <div>
            <input type="checkbox" />
            <p>Lorem ipsum dolor sit amet.</p>
            <div>
                <TrashIcon />
                <PencilIcon />
            </div>
        </div>
    )
}