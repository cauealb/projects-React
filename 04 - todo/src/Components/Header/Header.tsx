import { PlusCircle } from 'phosphor-react'
import styleHeader from './HeadeStyle.module.css'
import logoTodo from  '../../assets/Logo todo.svg'
import Clipboard  from '../../assets/Clipboard.svg'
import { useState } from 'react'
import { ListTask } from '../ListTask/ListTask'

export function Header() {

    const [task, setTask] = useState<string[]>([])
    const [changeTask, setChangeTask] = useState<string>('')

    const [taskFinished, setTaskFinished] = useState<number>(0)

    function handleSubmitNewTask() {
        event?.preventDefault()

        setTask([...task, changeTask])
        setChangeTask('')
    }

    function TaskFinished() {
        console.log('oi')
        setTaskFinished(state => state + 1)
    }

    return (
        <>  
            <header className={styleHeader.header}>
                <img className={styleHeader.logo} src={logoTodo} alt="Logo da todo" />   
                <form onSubmit={handleSubmitNewTask} className={styleHeader.inputs__form}>
                    <input onChange={(e) => {setChangeTask(e.target.value)}} value={changeTask} className={styleHeader.taskname} type="text" required autoFocus autoComplete='off' placeholder="Adicione uma nova tarefa"/>
                    <button disabled={!changeTask} className={styleHeader.btn}>Criar <PlusCircle size={15}/></button>
                </form>
            </header>
            <div className={styleHeader.content}>
                <div className={styleHeader.infos}>
                    <div className={styleHeader.infos_messages}>
                        <p>
                            Tarefas criadas
                        </p>
                        <span className={styleHeader.numbertask}>{task.length}</span>
                    </div>
                    <div className={styleHeader.infos_messages}>
                        <p>
                            Concluídas
                        </p>
                        <span className={styleHeader.numbertask}>{taskFinished} de {task.length}</span>
                    </div>
                </div>

                {task.length > 0 ? (
                    task.map((item) => {
                        return <ListTask content={item} taskFinished={TaskFinished}/>
                    })
                ) : (
                    <div className={styleHeader.alert_notask}>
                        <img src={Clipboard}/>
                        <div className={styleHeader.notask__infos}>
                            <p>Você ainda não tem tarefas cadastradas</p>
                            <p>Crie tarefas e organize seus itens a fazer</p>
                        </div>
                    </div>
                )}

            </div>
        </>
    )
}