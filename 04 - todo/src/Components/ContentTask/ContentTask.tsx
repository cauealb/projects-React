import styleContent from './ContentTask.module.css'
import Clipboard from '../../assets/Clipboard.svg'
import { useState } from 'react'
import { ListTask } from '../ListTask/ListTask'

interface HeaderProps {
    changeTask: string
}

interface NewTask {
    content: string
    dateCreate: number
}

export function ContentTask({changeTask}: HeaderProps) {
    const [task, setTask] = useState<NewTask[]>([])
    

    function handleSubmitNewTask() {
        event?.preventDefault()
    
        const newTask: NewTask = {
            content: changeTask,
            dateCreate: new Date().getTime()
        }
    
        setTask([...task, newTask])
        // setChangeTask('')
    }

    return (
        <>
            <div className={styleContent.content}>
                <div className={styleContent.infos}>
                    <div className={styleContent.infos_messages}>
                        <p>
                            Tarefas criadas
                        </p>
                        <span className={styleContent.numbertask}>0</span>
                    </div>
                    <div className={styleContent.infos_messages}>
                        <p>
                            Concluídas
                        </p>
                        <span className={styleContent.numbertask}>0</span>
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