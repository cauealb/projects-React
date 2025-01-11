import styleList from './ListTask.module.css'
import { Trash, PencilSimple } from 'phosphor-react'
import CircleSVG from '../../assets/checkFalse.svg'
import CircleCheckSVG from '../../assets/checkTrue.svg'


interface ListTaskProps {
    id: number
    content: string
    isComplete: boolean
    deleteTask: (id: number) => void
    handleCompleteTask: (id: number) => void
    handleNotCompleteTask: (id: number) => void
    NotCompletedTask: () => void
    EditTask: (id: number) => void
}

export function ListTask ({content, id, isComplete, deleteTask, handleCompleteTask, handleNotCompleteTask, NotCompletedTask, EditTask}: ListTaskProps) {

    function handleClickDelete() {
        deleteTask(id)
    }

    function CompleteTask() {
        handleCompleteTask(id)
    }

    function NotCompleteTask() {
        NotCompletedTask()
        handleNotCompleteTask(id)
    }

    function ChageTask() {
        EditTask(id)
    }

    const disableEdit = isComplete

    return (
        <>  
            <div className={styleList.content__task}>
                {isComplete ? (
                    <img className={styleList.input} onClick={NotCompleteTask} src={CircleSVG}/>
                ) : (
                    <img className={styleList.input} onClick={CompleteTask} src={CircleCheckSVG} />
                )}

                <p className={isComplete ? styleList.content_risck : styleList.content_norisck}>{content}</p>
                <div className={styleList.area_btn}>
                    <button onClick={ChageTask} disabled={disableEdit}><PencilSimple size={20}/></button>
                    <button onClick={handleClickDelete} ><Trash size={20} /></button> 
                </div>
            </div>
        </>
    )
}
