import styleContent from './ContentTask.module.css'
import Clipboard from '../../assets/Clipboard.svg'
import { ListTask } from '../ListTask/ListTask'

interface NewTask {
    content: string
    dateCreate: number
}

interface HeaderProps {
    task: NewTask[]
}

export function ContentTask({task}: HeaderProps) {
    
    return (
        <>
            <div className={styleContent.content}>
                <div className={styleContent.infos}>
                    <div className={styleContent.infos_messages}>
                        <p>
                            Tarefas criadas
                        </p>
                        <span className={styleContent.numbertask}>{task.length}</span>
                    </div>
                    <div className={styleContent.infos_messages}>
                        <p>
                            Concluídas
                        </p>
                        <span className={styleContent.numbertask}>0 de {task.length}</span>
                    </div>
                </div>

                {task.length > 0 ? (
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
                )}
            </div>
        </>
    )
}