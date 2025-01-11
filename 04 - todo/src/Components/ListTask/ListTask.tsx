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
}

export function ListTask ({content, id, isComplete, deleteTask, handleCompleteTask, handleNotCompleteTask, NotCompletedTask}: ListTaskProps) {

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
                    <span className={styleList.btn_remove}><PencilSimple size={20}/></span>
                    <span className={styleList.btn_edit} onClick={handleClickDelete} ><Trash size={20} /></span>
                </div>
            </div>
        </>
    )
}
