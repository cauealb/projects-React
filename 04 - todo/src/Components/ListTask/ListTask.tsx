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

{/* {task.length > 0 ? (
                    task.map((item) => {
                        return (
                            <ListTask key={item.dateCreate} content={item.content} dateCreate={item.dateCreate}/>
                        )
                    })
                ) : (
                    <div className={styleContent.alert_notask}>
                        <img src={Clipboard}/>
                        <div className={styleContent.notask__infos}>
                            <p>Você ainda não tem tarefas cadastradas</p>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                        </div>
                )} */}
