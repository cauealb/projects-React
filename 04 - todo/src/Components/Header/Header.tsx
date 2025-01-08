import { PlusCircle } from 'phosphor-react'
import styleHeader from './HeadeStyle.module.css'
import logoTodo from  '../../assets/Logo todo.svg'
import { ContentTask } from '../ContentTask/ContentTask.tsx'
import { useState } from 'react'

interface NewTask {
    content: string
    dateCreate: number
}

export function Header() {

    const [task, setTask] = useState<NewTask[]>([])
    const [changeTask, setChangeTask] = useState<string>('')

    function handleSubmitNewTask() {
        event?.preventDefault()
    
        const newTask: NewTask = {
            content: changeTask,
            dateCreate: new Date().getTime()
        }

        console.log(newTask)
    
        setTask([...task, newTask])
        setChangeTask('')
    }

    return (
        <>  
            <header className={styleHeader.header}>
                <img className={styleHeader.logo} src={logoTodo} alt="Logo da todo" />   
                <form className={styleHeader.inputs__form}>
                    <input 
                        onSubmit={handleSubmitNewTask}
                        onChange={(e) => setChangeTask(e.target.value)} 
                        className={styleHeader.taskname} 
                        type="text" 
                        required 
                        autoFocus
                        value={changeTask}
                        autoComplete='off' 
                        placeholder="Adicione uma nova tarefa"
                    />
                    <button 
                        type='submit' 
                        disabled={!changeTask} 
                        className={styleHeader.btn}>
                            Criar <PlusCircle size={15}/>
                    </button>
                </form>
            </header>
            <ContentTask task={task}/>
        </>
    )
}