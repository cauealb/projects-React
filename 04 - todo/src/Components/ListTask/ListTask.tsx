import styleList from './ListTask.module.css'
import { Trash } from 'phosphor-react'

interface ListTaskProps {
    id: number
    content: string
    dateCreate: number
    isComplete: boolean
    deleteTask: (dateCreate: number) => void
    handleCompleteTask: (id: number) => void
}

export function ListTask ({content, dateCreate, id, deleteTask, handleCompleteTask}: ListTaskProps) {

    function handleClickDelete() {
        deleteTask(id)
    }

    function CompleteTask() {
        handleCompleteTask(dateCreate)
    }

    return (
        <>  
            <div className={styleList.content__task}>
                <form className={styleList.radio}>
                    <input onClick={CompleteTask} type="checkbox" />
                </form>
                <p>{content}</p>
                <span onClick={handleClickDelete} ><Trash size={20} /></span>
            </div>
        </>
    )
}
