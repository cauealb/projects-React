import { useState } from 'react'
import styleList from './ListTask.module.css'

export function ListTask () {
    const [taskCreate, setTaskCreate] = useState<number>(0)
    const [taskFinished, setTaskFinished] = useState<number>(0)

    return (
        <>
            <div className={styleList.content}>
                <div className={styleList.infos}>
                    <div className={styleList.infos_messages}>
                        <p>
                            Tarefas criadas
                        </p>
                        <span>{taskCreate}</span>
                    </div>
                    <div className={styleList.infos_messages}>
                    <p>
                        Concluídas
                    </p>
                        <span>{taskFinished}</span>
                    </div>
                </div>
            </div>
        </>
    )
}