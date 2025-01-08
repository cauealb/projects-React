import styleList from './ListTask.module.css'
import { Trash } from 'phosphor-react'

interface ListTaskProps {
    content: string
    dateCreate: number
    deleteTask: () => void
}

export function ListTask ({content, dateCreate, deleteTask}: ListTaskProps) {

    function handleClickDelete() {
        deleteTask()
    }

    return (
        <>  
            <div className={styleList.content__task}>
                <form className={styleList.radio}>
                    <input type="checkbox" />
                </form>
                <p>{content}</p>
                <span onClick={handleClickDelete} ><Trash size={20} /></span>
            </div>
        </>
    )
}
