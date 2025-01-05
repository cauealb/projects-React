import { PlusCircle } from 'phosphor-react'
import styleHeader from './HeadeStyle.module.css'
import logoTodo from  '../../assets/Logo todo.svg'
import { useState } from 'react'

export function Header() {

    const [changeTask, setChangeTask] = useState('')
    const [taskCreate, setTaskCreate] = useState<number>(0)
    const [taskFinished, setTaskFinished] = useState<number>(0)

    return (
        <>  
            <header className={styleHeader.header}>
                <img className={styleHeader.logo} src={logoTodo} alt="Logo da todo" />   
                <form className={styleHeader.inputs__form}>
                    <input onChange={(e) => {setChangeTask(e.target.value)}} className={styleHeader.taskname} type="text" required autoFocus autoComplete='off' placeholder="Adicione uma nova tarefa"/>
                    <button disabled={!changeTask} className={styleHeader.btn}>Criar <PlusCircle size={15}/></button>
                </form>
            </header>
            <div className={styleHeader.content}>
                <div className={styleHeader.infos}>
                    <div className={styleHeader.infos_messages}>
                        <p>
                            Tarefas criadas
                        </p>
                        <span className={styleHeader.numbertask}>{taskCreate}</span>
                    </div>
                    <div className={styleHeader.infos_messages}>
                        <p>
                            Concluídas
                        </p>
                        <span className={styleHeader.numbertask}>{taskFinished} de {taskCreate}</span>
                    </div>
                </div>
            </div>
        </>
    )
}