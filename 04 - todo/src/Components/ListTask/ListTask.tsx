import styleList from './ListTask.module.css'
import { Trash } from 'phosphor-react'
// import CircleSVG from '../../assets/Layer 1.svg'
// import CircleCheckSVG from '../../assets/Layer 2.svg'
import CircleSVG from '../../assets/checkFalse.svg'
import CircleCheckSVG from '../../assets/checkTrue.svg'


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
                    <img onClick={CompleteTask} src={CircleSVG}/>
                ) : (
                    <img onClick={CompleteTask} src={CircleCheckSVG} />
                )}

                <p className={isComplete ? styleList.content_risck : styleList.content_norisck}>{content}</p>
                <span onClick={handleClickDelete} ><Trash size={20} /></span>
            </div>
        </>
    )
}
