import styleList from './ListTask.module.css'
import { Trash } from 'phosphor-react'

interface ListTaskProps {
    content: string
    dateCreate: number
}

export function ListTask ({content, dateCreate}: ListTaskProps) {
    
    console.log(dateCreate)

    return (
        <>  
            <div className={styleList.content__task}>
                <form className={styleList.radio}>
                    <input type="checkbox" />
                </form>
                <p>{content}</p>
                <span><Trash size={20} /></span>
            </div>
        </>
    )
}
