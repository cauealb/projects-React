import styleContent from './ContentTask.module.css'
import Clipboard from '../../assets/Clipboard.svg'
import { ListTask } from '../ListTask/ListTask'
import { useState } from 'react'

interface NewTaskContent {
    id: number
    dateCreate: Date
    content: string
    isComplete: boolean
}

interface HeaderProps {
    task: NewTaskContent[]
    deleteTask: (id: number) => void
    completeTask: (id: number) => void
    handleNotCompleteTask: (id: number) => void
}

export function ContentTask({task, deleteTask, completeTask, handleNotCompleteTask}: HeaderProps) {
    
    const [completedTasks, setCompletedTasks] = useState(task.length)

    function handleCompleteTask(id: number) {
        completeTask(id)
        setCompletedTasks(state => state + 1)
    }

    function NotCompletedTask() {
        setCompletedTasks(state => state - 1)
    }

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
                        <span className={styleContent.numbertask}>{completedTasks} de {task.length}</span>
                    </div>
                </div>

                {task.length > 0 ? (
                    task.map((item) => {
                        return (
                            <ListTask 
                                key={item.id} 
                                id={item.id}
                                content={item.content} 
                                isComplete={item.isComplete} 
                                deleteTask={deleteTask}
                                handleCompleteTask={handleCompleteTask}
                                handleNotCompleteTask={handleNotCompleteTask}
                                NotCompletedTask={NotCompletedTask}
                            />
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