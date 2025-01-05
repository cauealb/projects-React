import styleList from './ListTask.module.css'
import { Trash } from 'phosphor-react'

interface TaskProps {
    content: string
    taskFinished: () => void
}

export function ListTask ({content, taskFinished}: TaskProps) {
    
    function handleFinichesTask() {
        taskFinished()
    }

    return (
        <>  
            <div className={styleList.content__task}>
                <form className={styleList.radio}>
                    <input onClick={handleFinichesTask} type="radio" />
                </form>
                <p>{content}</p>
                <span><Trash size={20} /></span>
            </div>
        </>
    )
}
