import { useState } from 'react'
import styleList from './ListTask.module.css'
import Clipboard  from '../../assets/Clipboard.svg'
import { Trash } from 'phosphor-react'

const api = [
    "Estudar programação"
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
                        <span className={styleList.numbertask}>{taskFinished}</span>
                    </div>
                </div>

                <div className={styleList.content__task}>
                    <form className={styleList.radio}>
                        <input type="radio" />
                    </form>
                        <p>ESTUDAR PROGRAMAÇÃO</p>
                        <Trash size={20} />
                </div>


                {/* {api.map((item) => {
                    return (
                        <div>

                        </div>
                    )
                })} */}

                {/* <div className={styleList.alert_notask}>
                    <img src={Clipboard}/>
                    <div className={styleList.notask__infos}>
                        <p>Você ainda não tem tarefas cadastradas</p>
                        <p>Crie tarefas e organize seus itens a fazer</p>
                    </div>
                </div> */}
            </div>
        </>
    )
}