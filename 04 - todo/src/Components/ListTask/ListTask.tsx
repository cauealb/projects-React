import styleList from './ListTask.module.css'
import { Trash, CheckCircle, Circle } from 'phosphor-react'

interface ListTaskProps {
    id: number
    content: string
    isComplete: boolean
    deleteTask: (id: number) => void
    handleCompleteTask: (id: number) => void
}

export function ListTask ({content, id, isComplete,deleteTask, handleCompleteTask}: ListTaskProps) {

    function handleClickDelete() {
        deleteTask(id)
    }

    function CompleteTask() {
        handleCompleteTask(id)
    }

    // function 

    return (
        <>  
            <div className={styleList.content__task}>
                {isComplete ? (
                    <CheckCircle className={styleList.input} size={20} color='#5E60CE'/>
                ) : (
                    <Circle className={styleList.input} onClick={CompleteTask} size={20} color='#4EA8DE'/>
                )}

                <p className={isComplete ? styleList.content_risck : styleList.content_norisck}>{content}</p>
                <span onClick={handleClickDelete} ><Trash size={20} /></span>
            </div>
        </>
    )
}
