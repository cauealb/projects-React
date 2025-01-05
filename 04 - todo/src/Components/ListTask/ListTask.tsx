import { useState } from 'react'
import styleList from './ListTask.module.css'
import Clipboard  from '../../assets/Clipboard.svg'
import { Trash } from 'phosphor-react'

const api = [
    "Estudar", "Lavar a louça"
]

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
                        <span className={styleList.numbertask}>{taskCreate}</span>
                    </div>
                    <div className={styleList.infos_messages}>
                        <p>
                            Concluídas
                        </p>
                        <span className={styleList.numbertask}>{taskFinished} de {taskCreate}</span>
                    </div>
                </div>

                {api.length > 0 ? (
                    api.map((item) => {
                        return (
                            <div className={styleList.content__task}>
                                <form className={styleList.radio}>
                                    <input type="radio" />
                                </form>
                                <p>{item}</p>
                                <span><Trash size={20} /></span>
                            </div>
                        )
                    })
                ) : (
                    <div className={styleList.alert_notask}>
                        <img src={Clipboard}/>
                        <div className={styleList.notask__infos}>
                            <p>Você ainda não tem tarefas cadastradas</p>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    </div>
                )}
            </div>
            
        </>
    )
}
