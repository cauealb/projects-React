import styleList from './ListTask.module.css'
import { Trash } from 'phosphor-react'

interface TaskProps {
    content: string
    dateCreate: number
}


export function ListTask ({content, dateCreate}: TaskProps) {
    
    function deleteTask() {
        
    }
    
    return (
        <>  
            <div className={styleList.content__task}>
                <form className={styleList.radio}>
                    <input type="checkbox" />
                </form>
                <p>{content}</p>
                <span onClick={deleteTask}><Trash size={20} /></span>
            </div>
        </>
    )
}
