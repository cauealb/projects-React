import styleList from './ListTask.module.css'
import { Trash } from 'phosphor-react'

interface ListTaskProps {
    id: number
    content: string
    isComplete: boolean
    deleteTask: (id: number) => void
    handleCompleteTask: (id: number) => void
}

export function ListTask ({content, id, deleteTask, handleCompleteTask}: ListTaskProps) {

    function handleClickDelete() {
        deleteTask(id)
    }

    function CompleteTask() {
        handleCompleteTask(id)
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
